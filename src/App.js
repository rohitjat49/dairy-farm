// import './App.css';
// import About from './component/About';
// import AllProductImg from './component/AllProductImg';
// import BlogComponent from './component/BlogComponent';
// import ContactPage from './component/ContactPage';
// import Footer from './component/Footer';
// import Gallery from './component/Gallery';
// import Ghee from './component/Ghee';
// import HomeComponent from './component/HomeComponent';
// import MilkProduct from './component/MilkProduct';
// import Navbar from './component/Navbar';
// import OrderNowComponent from './component/OrderNowcomponent';
//  import OurFarm from './component/OurFarm';
// import Panner from './component/Panner';
// import Products from './component/Products';
// import Services from './component/Services';
// import SliderComponent from './component/SliderComponent';

// function App() {
//   return (
//    <>
//    {/* <Navbar/>
//   <SliderComponent/>
//    <OurFarm/>
//    <Products/>
//    <About/>
//    <Footer/>
//    <Services/>
//    <BlogComponent/>
//    <Gallery/>
//    <OrderNowComponent/> */}
   
//    {/* <Products/>
//    <About/>
//    <Services/>
//    <Footer/>
//    <Gallery/>
//    <AllProductImg/>
//    <MilkProduct/>
//    <Ghee/>
//    <Panner/> */}
//    {/* <ContactPage/> */}
//    <HomeComponent/>
  
   
//    </>
//   );
// }

// export default App;

import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomeComponent from "./component/HomeComponent";
import About from "./component/About";
import MilkProduct from "./component/MilkProduct";
import OrderNowComponent from "./component/OrderNowcomponent";
import Services from "./component/Services";
import Gallery from "./component/Gallery";
import ContactPage from "./component/ContactPage";
import BlogComponent from "./component/BlogComponent";
import Ghee from "./component/Ghee";
import Panner from "./component/Panner";
import Login from "./auth/LoginPage";
import GetOrderInformation from "./Dashboard/GetOrderInformation";
import GetContact from "./Dashboard/GetContact";
import CrudComponent from "./component/CurdComponent";
import Header from "./component/Header";
import Layout from "./component/Layout";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
const App = () => {
  return (
    <>
   
    <Router> 
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product/Milk" element={<MilkProduct/>}/>
        <Route path="/Product/Ghee" element={<Ghee/>}/>
        <Route path="/Product/Panner" element={<Panner/>}/>
        <Route path="/Product/Curd" element={<CrudComponent/>}/>
        <Route path="/Order-now" element={<OrderNowComponent/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Blog" element={<BlogComponent/>}/>
        <Route path="/Contact" element={<ContactPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/get-order" element={<GetOrderInformation/>}/>
        <Route path="/get-contact" element={<GetContact/>}/>
      </Routes>
      <Footer/>
    </Router>
    

   </>
    
   
  );
};

export default App;

