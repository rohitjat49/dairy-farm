import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import ProductList from './ProductList';
import TablePage from './TablePage'; // Assuming you have a TablePage component
import AddProduct from './AddProduct'; // Assuming you have an AddProduct component
import GetOrderInformation from './GetOrderInformation';
import GetContact from './GetContact';

const Dashboard = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const token = localStorage.getItem("token");
  const LogOut = async () => {
    if (window.confirm("Confirm You Want to Log Out")) {
      await localStorage.removeItem("token");
      logout(); // Assuming logout is a function provided by your authentication context to clear user session or state
      navigate("/");
    }
  };

  return (
    <>
      <header className="bg-blue-900 bg-opacity-90 text-white flex justify-around p-4">
        <h1 className="text-xl">Dashboard</h1>
        <div className="flex space-x-4">
          <button onClick={() => navigate("/table")} className="flex items-center">
            <span className="material-icons mr-2">table_chart</span> Table Page
          </button>
          <button onClick={() => navigate("/productlist")} className="flex items-center">
            <span className="material-icons mr-2">list</span> Product List
          </button>
          <button onClick={() => navigate("/add-product")} className="flex items-center">
            <span className="material-icons mr-2">add_circle_outline</span> Add Product
          </button>
          <button onClick={LogOut}>Logout</button>
        </div>
      </header>
      <div className="flex flex-col h-screen p-4">
        <main className="flex-grow bg-gray-100 p-4">
          <Routes>
            <Route path="/get-order" element={<GetOrderInformation />} />
            <Route path="/get-contact" element={<GetContact />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
