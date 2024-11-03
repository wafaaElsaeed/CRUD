import Link from 'next/link';
import React from 'react'
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { FaEdit, FaEye } from "react-icons/fa";

export default function PostCard({
  title,
  body,
  tags,
  reactions,
  views,
  id
}) {
  return (
    <div className='border p-4 rounded-md flex flex-col gap-2'>
      {/* title */}
      <div className='flex gap-2 items-center'>
        <h2 className='text-lg font-semibold min-h-16'>
          {title}
        </h2>

        {/* link to edit page */}
        <Link href={`/posts/${id}/update`}>
          <FaEdit />
        </Link>
      </div>

      {/* body */}
      <p className='h-[250px] overflow-y-auto customScroll text-sm text-gray-600 leading-7'>
        {body}
      </p>

      {/* tags */}
      <div>
        <h4 className='mb-3 font-medium'>
          Tags:
        </h4>
        <div className='flex flex-wrap gap-3'>
          {
            tags?.map((tag: string, i: number) => (
              <div key={i} className='border px-3 py-2 text-xs rounded-lg capitalize'>
                {tag}
              </div>
            ))
          }
        </div>
      </div>

      {/* reactions & views */}
      <div className='flex justify-between items-center mt-4'>
        <div className='flex flex-wrap flex-col gap-1 items-center'>
          <FaEye />
          <span className='text-xs text-gray-600'>
            {views}
          </span>
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <AiFillLike />
          <span className='text-xs text-gray-600'>
            {reactions?.likes}
          </span>
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <AiFillDislike />
          <span className='text-xs text-gray-600'>
            {reactions?.dislikes}
          </span>
        </div>
      </div>
    </div>
  )
}
