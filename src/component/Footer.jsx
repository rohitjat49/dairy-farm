import React from "react";

const   Footer = () => {
  return (
    <>
      {/* <footer className="bg-footer-background ">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 sm:grid-cols-1 py-12 ">
            <div>
              <p className="text-3xl font-bold">logo</p>
            </div>
            <div>
              <p className="text-3xl font-bold ">About</p>
              <div className="grid md:grid-cols-2 sm:grid-cols-1">
                <div className=" uppercase cursor-pointer ">
                  <p>
                   
                    <snap className="hover:text-orange"> Contact Us</snap>
                  </p>

                  <p>
                    <snap className="hover:text-orange">About Page</snap>
                  </p>

                  <p>
                    <snap className="hover:text-orange">Latest Blogs</snap>
                  </p>
                </div>
                <div className=" uppercase cursor-pointer ">
                  <p>
                   
                    <snap className="hover:text-orange"> Contact Us</snap>
                  </p>

                  <p>
                    <snap className="hover:text-orange">About Page</snap>
                  </p>

                  <p>
                    <snap className="hover:text-orange">Latest Blogs</snap>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold">Need Help??</p>
            </div>
          </div>
        </div>
        <hr className="mt-24" />
        <div className="container mx-auto mt-8 flex flex-col sm:flex-row justify-between">
          <p>&copy; Copyright</p>
          <p className="uppercase hover:text-green md:font-bold">
            <a href="https://rishusinfotech.in/"> Created by Rishus Infotech</a>
          </p>
        </div>
       

        <div className="footer-img"></div>
      </footer> */}


      <footer className="bg-footer-background w-full">
  <div className="container mx-auto">
    <div className="grid md:grid-cols-3 sm:grid-cols-1 py-12 ">
      <div className="">
       
        <img src="/image/narmada text logo.png" alt="logo" width="200px"/>
      </div>
      <div className="md:mt-0 xs:mt-2">
        <p className="text-3xl font-bold">About</p>
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
          <div className="uppercase cursor-pointer font-semibold">
            <p><a href="/" className="hover:text-orange">Home</a></p>
            <p><a href="/About" className="hover:text-orange">About </a></p>
            <p><a href="/Product/Milk" className="hover:text-orange">Product</a></p>
            <p><a href="/Order-now" className="hover:text-orange">Order Now</a></p>
            <p><a href="/Gallery" className="hover:text-orange">Gallery</a></p>
          </div>
          <div className="uppercase cursor-pointer font-semibold">
            <p><a href="/Contact" className="hover:text-orange">Contact Us</a></p>
            <p><a href="/Services" className="hover:text-orange">Services</a></p>
            <p><a href="/Blog" className="hover:text-orange">Blog</a></p>
            <p><a href="/login" className="hover:text-orange">Admin Pannel</a></p>
          </div>
        </div>
      </div>
      <div className="md:mt-0 xs:mt-2">
        <p className="text-3xl font-bold">Need Help??</p>
        <div className="mt-4">
    <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook text-gray-500 hover:text-orange text-2xl mx-2"></i>
    </a>
    <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-whatsapp text-gray-500 hover:text-orange  text-2xl mx-2"></i>
    </a>
    <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram text-gray-500 hover:text-orange  text-2xl mx-2"></i>
    </a>
  </div>
      </div>
    </div>
  </div>
  <hr className="mt-24" />
  <div className="container mx-auto mt-8 flex flex-col sm:flex-row justify-between">
    <p>&copy; Copyright</p>
    <p className="uppercase hover:text-green md:font-bold">
      <a href="https://rishusinfotech.in/">Created by Rishus Infotech</a>
    </p>
  </div>
  <div className="footer-img">
    
  </div>


 
</footer>


    </>
  );
};

export default Footer;
