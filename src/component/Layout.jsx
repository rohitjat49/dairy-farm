import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-end justify-between bg-brown p-6">
      <Header />
      <div className="container mx-auto bg-white bg-opacity-20 shadow-lg backdrop-blur p-4 overflow-hidden rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default Layout;
