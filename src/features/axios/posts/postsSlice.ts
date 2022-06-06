import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

export type PostType = {
  id: number
  userId: number
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

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost: PostType) => {
  const response = await axios.post(POSTS_URL, initialPost)
  return response.data
})

export const deletePost = createAsyncThunk('posts/deletePost', async (id: number) => {
  try {
    const response = await axios.delete(`${POSTS_URL}/${id}`)
    if (response?.status === 200) return id
  } catch (err: any) {
    return err.message
  }
})

export const updatePost = createAsyncThunk('posts/updatePost', async (initialPost: PostType) => {
  const { id } = initialPost
  try {
    const response = await axios.put(`${POSTS_URL}/${id}`, initialPost)
    return response.data
  } catch (err) {
    return initialPost // only for testing Redux!
  }
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
      .addCase(addNewPost.fulfilled, (state, action) => {
        action.payload.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        }
        state.posts.push(action.payload)
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log('Update could not complete')
          console.log(action.payload)
          return
        }
        const { id } = action.payload
        const posts = state.posts.filter((post) => post.id !== id)
        state.posts = [...posts, action.payload]
      })
      .addCase(deletePost.fulfilled, (state, action: PayloadAction<number>) => {
        if (!action.payload) {
          console.log('Delete could not complete')
          console.log(action.payload)
          return
        }
        const posts = state.posts.filter((post) => post.id !== action.payload)
        state.posts = posts
      })
  },
})

export const selectAllPosts = (state: any) => state.posts.posts
export const selectPostsStatus = (state: any) => state.posts.status
export const selectPostsError = (state: any) => state.posts.error

export default postsSlice.reducer
