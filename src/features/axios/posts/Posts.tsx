import React, { useEffect } from 'react'

import Post from './Post'
import {
  selectPostsError,
  selectPostsStatus,
  selectAllPosts,
  fetchPosts,
  PostType,
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
      {' '}
      <button onClick={() => dispatch(fetchPosts())}>+</button>
      {content}
    </div>
  )
}

export default Posts
