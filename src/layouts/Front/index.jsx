import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import RouteChangeTracker from '../../components/RouteChangeTracker';
import AuthListener from '../../components/AuthListener';

import './index.css';

const Layout = () => (
  <>
    <AuthListener />
    <RouteChangeTracker />
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;