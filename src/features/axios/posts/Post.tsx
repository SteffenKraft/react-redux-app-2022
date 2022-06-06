import React from 'react'
import { PostType, deletePost, updatePost } from './postsSlice'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'

const Post = ({ post }: { post: PostType }): JSX.Element => {
  const dispatch = useAppDispatch()
  return (
    <div>
      <p>
        Post title: {post.title} <br />
        Post id {post.id} <br />
        Post body {post.body} <br />
        <button onClick={() => dispatch(deletePost(post.id))}>delete</button>
        <button
          onClick={() =>
            dispatch(
              updatePost({
                id: post.id,
                title: 'Updated Title of the new Post',
                body: 'Updated Body of the new Post',
                userId: 1,
              }),
            )
          }
        >
          update Post
        </button>
      </p>
    </div>
  )
}

export default Post
