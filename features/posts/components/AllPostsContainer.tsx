'use client'
import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import { Post } from '../types/Post'
import { getAllPosts } from '../apis/getAllPosts'
import Pagination from '@/components/pagination/Pagination'
import Search from './Search'
import useBebounce from '@/hooks/useBebounce';
import Link from 'next/link'
import Loader from '@/components/loading/Loader'

export default function AllPostsContainer() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    /* for pagination */
    const [page, setPage] = useState(1);
    const limit = 10; // Number of posts per page
    const [totalPages, setTotalPages] = useState(0);

    /* for search */
    const [search, setSearch] = useState('');
    const searchQuery = useBebounce(search, 1000);

    useEffect(() => {
        const skip = (page - 1) * limit;
        getPosts(skip, search)
    }, [page, searchQuery])

    /* get all posts */
    function getPosts(skip: number = 0, search: string = '') {
        setIsLoading(true)
        getAllPosts(skip, search).then((res) => {
            const returnedPosts = [...res.data.posts]
            setIsLoading(false)
            setPosts(returnedPosts)
            setTotalPages(Math.ceil(res.data.total / limit));
        })
    }

    /* change pagination handler */
    const handlePageChange = (selectedItem: { selected: number }) => {
        setPage(selectedItem.selected + 1);
    };

    return (
        <div className="">
            <div className='flex justify-between items-center'>
                <h1 className='mt-10 mb-6 text-3xl font-bold text-center'>
                    All Posts
                </h1>
                {/* search */}
                <Search search={search} setSearch={setSearch} setPage={setPage} />
                {/* create */}
                <Link href='/posts/create' className='px-5 py-2 bg-slate-600 text-white rounded-md hover:opacity-80'>
                    Add Post
                </Link>
            </div>


            {isLoading ?
                <Loader height={'h-[80vh]'} />
                :
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-7">
                        {
                            posts.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))
                        }
                    </div>
                </>
            }
            <div className='my-8'>
                <Pagination pageCount={totalPages} onPageChange={handlePageChange} />
            </div>

        </div>
    )
}
