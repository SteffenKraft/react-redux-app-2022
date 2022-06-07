import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Starting json-server with this command:
// json-server --watch src/data/db.json --port 3500

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
  tagTypes: ['Todos'],
  endpoints: () => ({}),
})
