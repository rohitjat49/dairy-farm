import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both email and password fields.");
      return;
    }

    try {
      const response = await fetch("https://dairyfarm.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      console.log("Response Data:", data); // Log response data for debugging

      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/get-order");
      } else {
        setMessage(data.message || "Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.log("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center min-h-screen mt-8">
  <div className="w-full max-w-md">
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h5 className="text-center mt-2 text-2xl font-semibold">Login</h5>
      <h1 className="text-center text-xl mb-4 font-medium">Welcome Back!</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
          <input
            type="email"
            className="mt-2 p-2 block w-full border-orange rounded-md focus:border-orange border-1"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold">Password</label>
          <input
            type="password"
            className="mt-2 p-2 block w-full border-gray-300 rounded-md focus:border-orange"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md bg-orange">Login</button>
        </div>
      </form>
      {message && <p className="mt-3 text-center text-red-600">{message}</p>}
    </div>
  </div>
</div>

    <Footer/>
    </>
  );
};

export default Login;
