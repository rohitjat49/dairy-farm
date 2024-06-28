import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=" bg-black bg-opacity-20 shadow-lg backdrop-blur text-center p-4 rounded-lg">
      {/* <div className="user py-4">
        <img src="img/Screenshot_20211107_133130[91].jpg" alt="" className="m-4 h-40 w-40 rounded-full object-cover shadow-lg" />
        <h3 className="text-3xl text-orange py-2">Rohit Jat</h3>
        <p className="text-xl text-gray-200 py-2">Web Developer</p>
      </div> */}
      <nav className="navbar p-4">
        <ul>
          <li className="my-4">
            <Link to="/milkproduct" className="block py-2 text-2xl text-orange bg-white bg-opacity-20 shadow-lg rounded-lg transition duration-200 hover:bg-opacity-50 hover:text-gray-700">Milk Product</Link>
          </li>
          <li className="my-4">
            <Link to="/panner" className="block py-2 text-2xl text-orange bg-white bg-opacity-20 shadow-lg rounded-lg transition duration-200 hover:bg-opacity-50 hover:text-gray-700">Panner</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
