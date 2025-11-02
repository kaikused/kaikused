import React from 'react';
import { Outlet } from 'react-router-dom'; // ¡Importante!
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        {/* Outlet renderizará el componente de la ruta actual */}
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};

export default Layout;