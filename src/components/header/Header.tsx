import { Link } from 'react-router-dom';
import * as Styled from './Header.styled';

const Header = (): JSX.Element => (
  <Styled.Header>
    <h1>Header</h1>
    <Link to="/">Home</Link>
    <Link to="/posts">Posts</Link>
    <Link to="/todos">Todos</Link>
  </Styled.Header>
);

export default Header;
