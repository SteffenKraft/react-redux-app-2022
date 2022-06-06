import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import { Outlet } from 'react-router-dom';

const Layout = (): JSX.Element => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
