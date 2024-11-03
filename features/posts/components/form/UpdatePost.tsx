'use client'
import React from 'react';
import { updatePost } from '../../apis/updatePost';
import PostForm from './PostForm';

export default function UpdatePost({ id }) {
    const onSubmit = async (data) => {
        return await updatePost({ ...data }, id).then((res) => {
            return 'done';
        }).catch((err) => {
            return err.response.errors;
        })
    };

    return (
        <div>
            <PostForm submitHandler={onSubmit} id={id} />
        </div>
    )
}
