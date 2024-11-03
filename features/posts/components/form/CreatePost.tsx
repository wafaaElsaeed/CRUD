'use client'
import React from 'react'
import PostForm from './PostForm'
import { createPost } from '../../apis/createPost';

export default function CreatePost() {
    const onSubmit = async (data) => {
        return await createPost({ ...data, userId: 5 }).then(() => {
            return 'done';
        }).catch((err) => {
            return err;
        })
    };

    return (
        <div>
            <PostForm submitHandler={onSubmit} />
        </div>
    )
}
