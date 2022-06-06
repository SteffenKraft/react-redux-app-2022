import React from 'react'
import { PostType } from './postsSlice'

const Post = ({ post }: { post: PostType }): JSX.Element => {
  return (
    <div>
      <p>
        {post.title} {post.userId}
      </p>
      <p>{post.body}</p>
    </div>
  )
}

export default Post
