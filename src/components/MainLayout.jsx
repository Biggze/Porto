import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Topbar from './topbar/Topbar';
import Footer from './footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;