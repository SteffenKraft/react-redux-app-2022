import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const POSTS_URL = 'https://gorest.co.in/public/v2/posts'

export type PostType = {
  id: number
  user_id: number
  title: string
  body: string
  reactions?: { thumbsUp: number; wow: number; heart: number; rocket: number; coffee: number }
}

type SliceState = {
  posts: PostType[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null | undefined
}

const initialState: SliceState = {
  posts: [],
  status: 'idle',
  error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(POSTS_URL)
  return response.data
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const loadedPosts = action.payload.map((post: PostType) => {
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          }
          return post
        })

        state.posts = loadedPosts
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const selectAllPosts = (state: any) => state.posts.posts
export const selectPostsStatus = (state: any) => state.posts.status
export const selectPostsError = (state: any) => state.posts.error

export default postsSlice.reducer
