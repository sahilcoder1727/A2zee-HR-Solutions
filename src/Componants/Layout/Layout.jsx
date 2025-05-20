import React, { useEffect } from 'react';

import { Outlet ,useLocation } from 'react-router-dom'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <><Header/>
    <Outlet/>
   <Footer/> </>
  )
}

export default Layout