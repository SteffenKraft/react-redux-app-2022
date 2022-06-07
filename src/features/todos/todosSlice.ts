import { apiSlice } from '../api/apiSlice'
import { TodoType } from './types'

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<TodoType[], void>({
      query: () => '/todos',
      providesTags: [{ type: 'Todos' }],
    }),
    addNewTodo: builder.mutation<TodoType, TodoType>({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: [{ type: 'Todos' }],
    }),
    deleteTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Todos' }],
    }),
  }),
})

export const { useGetTodosQuery, useAddNewTodoMutation, useDeleteTodoMutation } = extendedApiSlice
