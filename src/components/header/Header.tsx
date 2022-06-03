import { Link } from "react-router-dom";

const Header = (): JSX.Element => (
  <>
    <h1>Header</h1>
    <Link to="/">Home</Link>
    <Link to="/posts">Posts</Link>
    <Link to="/todos">Todos</Link>
  </>
);

export default Header;
