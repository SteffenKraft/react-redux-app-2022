import { Link } from 'react-router-dom'
import * as Styled from './Header.styled'
import { useGetTodosQuery } from '../../features/todos/todosSlice'

const Header = (): JSX.Element => {
  const { data: todos } = useGetTodosQuery()
  return (
    <Styled.Header>
      <h1>Header {todos?.length}</h1>
      <Link to='/'>Home</Link>
      <Link to='/posts'>Posts</Link>
      <Link to='/todos'>Todos</Link>
    </Styled.Header>
  )
}

export default Header
