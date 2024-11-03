import CreatePost from '@/features/posts/components/form/CreatePost'
import React from 'react'

export function generateMetadata() {
  return {
    title: 'Add new post',
  };
}

export default function AddPostPage() {
  return (
    <div>
      <CreatePost />
    </div>
  )
}
