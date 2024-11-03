import UpdatePost from '@/features/posts/components/form/UpdatePost'
import React from 'react'

export function generateMetadata() {
  return {
    title: 'Update post',
  };
}

export default function UpdatePostPage({ params: { id } }) {
  return (
    <div>
      <UpdatePost id={id} />
    </div>
  )
}
