import Home from 'pages/home/Home';
import Layout from 'pages/layout/Layout';
import Posts from 'pages/posts/Posts';
import Todos from 'pages/todos/Todos';
import { Routes, Route } from 'react-router-dom';

const App = (): JSX.Element => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/posts" element={<Posts />} />
    </Route>
  </Routes>
);

export default App;
