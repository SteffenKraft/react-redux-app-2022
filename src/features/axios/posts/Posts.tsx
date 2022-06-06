import React, { useEffect } from 'react'

import Post from './Post'
import {
  selectPostsError,
  selectPostsStatus,
  selectAllPosts,
  fetchPosts,
  PostType,
  addNewPost,
} from './postsSlice'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'

const Posts = (): JSX.Element => {
  const posts = useAppSelector(selectAllPosts)
  const postsStatus = useAppSelector(selectPostsStatus)
  const postsError = useAppSelector(selectPostsError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  let content
  if (postsStatus === 'loading') {
    content = <p>Loading...</p>
  } else if (postsStatus === 'succeeded') {
    content = posts.map((post: PostType) => <Post key={post.id} post={post} />)
  } else if (postsStatus === 'failed') {
    content = <p>{postsError}</p>
  }
  return (
    <div>
      {content}
      <button
        onClick={() =>
          dispatch(
            addNewPost({
              id: 101,
              title: 'Title of the new Post',
              body: 'Body of the new Post',
              userId: 123,
            }),
          )
        }
      >
        add static Post with id 101
      </button>
    </div>
  )
}

export default Posts
