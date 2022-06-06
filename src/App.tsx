import Home from 'pages/home/Home'
import Layout from 'pages/layout/Layout'
import Posts from 'pages/posts/Posts'
import Post from 'pages/posts/Post'
import Todos from 'pages/todos/Todos'
import { Routes, Route, Navigate } from 'react-router-dom'

const App = (): JSX.Element => (
  <Routes>
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='todos' element={<Todos />} />
      <Route path='posts'>
        <Route index element={<Posts />} />
        <Route path=':postId' element={<Post />} />
      </Route>
      {/* catches all other Routes, can be replaced with a 404 page */}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Route>
  </Routes>
)

export default App
