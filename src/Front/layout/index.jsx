import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import RouteChangeTracker from '../../components/RouteChangeTracker'

import './index.css';

const Layout = () => (
  <>
    <RouteChangeTracker />
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;