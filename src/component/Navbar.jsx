


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isProductOpen, setIsProductOpen] = useState(false);

//     return (
//         <div className="relative bg-footer-background shadow h-32 flex items-center justify-between px-4">
//             <div className="logo">
//                 <img src="../../image/narmada text logo.png" alt='img' className="" width="150px" />
//             </div>
//             <div className="hidden md:flex space-x-8 md:space-x-12 text-bold md:text-lg items-center justify-center">
//                 <Link to="/" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Home</Link>
//                 <Link to="/About" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">About</Link>
//                 <div className="relative">
//                     <button 
//                         onMouseEnter={() => setIsProductOpen(true)}
//                         onMouseLeave={() => setIsProductOpen(false)}
//                         className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer"
//                     >
//                         Product
//                     </button>
//                     {isProductOpen && (
//                         <div 
//                             onMouseEnter={() => setIsProductOpen(true)}
//                             onMouseLeave={() => setIsProductOpen(false)}
//                             className="absolute left-0 w-48 bg-white z-40 shadow-md rounded-md mt-2"
//                         >
//                             <Link to="/Product/Milk" className="block px-4 py-2 hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Milk</Link>
//                             <Link to="/Product/Paneer" className="block px-4 py-2 hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Paneer</Link>
//                             <Link to="/Product/Mawa" className="block px-4 py-2 hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Mawa</Link>
//                             <Link to="/Product/Ghee" className="block px-4 py-2 hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Ghee</Link>
//                         </div>
//                     )}
//                 </div>
//                 <Link to="/Order-now" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Order Now</Link>
//                 <Link to="/Services" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Services</Link>
//                 <Link to="/Gallery" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Gallery</Link>
//                 <Link to="/Blog" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Blog</Link>
//                 <Link to="/Contact" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Contact</Link>
//             </div>
//             <div className="md:hidden">
//                 <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//                     </svg>
//                 </button>
//             </div>
//             {isOpen && (
//                 <div className="absolute top-16 left-0 w-full bg-background-color z-50 flex flex-col items-center space-y-4 py-4 md:hidden">
//                     <Link to="/" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Home</Link>
//                     <Link to="/About" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">About</Link>
//                     <div className="relative">
//                         <button 
//                             onClick={() => setIsProductOpen(!isProductOpen)}
//                             className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer"
//                         >
//                             Product
//                         </button>
//                         {isProductOpen && (
//                             <div className="absolute -left-7 w-24 z-50 mt-12 bg-white shadow-md rounded-md mt-2">
//                                 <Link to="/Product/Milk" className="block px-4 py-2 hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Milk</Link>
//                                 <Link to="/Product/Paneer" className="block px-4 py-2 hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Paneer</Link>
//                                 <Link to="/Product/Mawa" className="block px-4 py-2 hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Mawa</Link>
//                                 <Link to="/Product/Ghee" className="block px-4 py-2 hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Ghee</Link>
//                             </div>
//                         )}
//                     </div>
//                     <Link to="/Order-now" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Order Now</Link>
//                     <Link to="/Services" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Services</Link>
//                     <Link to="/Gallery" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Gallery</Link>
//                     <Link to="/Blog" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Blog</Link>
//                     <Link to="/Contact" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Contact</Link>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Navbar;
// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isProductOpen, setIsProductOpen] = useState(false);
//     const timeoutRef = useRef(null);
//     const location = useLocation();

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [location]);

//     const handleMouseEnter = () => {
//         if (timeoutRef.current) {
//             clearTimeout(timeoutRef.current);
//             timeoutRef.current = null;
//         }
//         setIsProductOpen(true);
//     };

//     const handleMouseLeave = () => {
//         timeoutRef.current = setTimeout(() => {
//             setIsProductOpen(false);
//         }, 300); // Adjust the delay (300ms) as needed
//     };

//     return (
//         <div className="fixed top-0 left-0 w-full bg-footer-background shadow h-28 flex items-center justify-between px-4 z-50">
//             <div className="logo">
//                 <img src="../../image/narmada text logo.png" alt='img' className="" width="150px" />
//             </div>
//             <div className="hidden md:flex space-x-8 md:space-x-12 text-bold md:text-lg items-center justify-center font-bold">
//                 <Link to="/" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Home</Link>
//                 <Link to="/About" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">About</Link>
//                 <div className="relative"
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                 >
//                     <button 
//                         className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer"
//                     >
//                         Product
//                     </button>
//                     {isProductOpen && (
//                         <div 
//                             className="absolute -left-5 w-32 bg-white z-40 shadow-md rounded-md mt-2 py-2"
//                         >
//                             <Link to="/Product/Milk" className="block px-4 py-1 hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Milk</Link>
//                             <Link to="/Product/Panner" className="block px-4 py-1 hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Paneer</Link>
//                             <Link to="/Product/Mawa" className="block px-4 py-1 hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Mawa</Link>
//                             <Link to="/Product/Ghee" className="block px-4 py-1 hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Ghee</Link>
//                             <Link to="/Product/Curd" className="block px-4 py-1 hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Curd</Link>

//                         </div>
//                     )}
//                 </div>
//                 <Link to="/Order-now" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Order Now</Link>
//                 <Link to="/Services" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Services</Link>
//                 <Link to="/Gallery" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Gallery</Link>
//                 <Link to="/Blog" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Blog</Link>
//                 <Link to="/Contact" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Contact</Link>
//             </div>
//             <div className="md:hidden">
//                 <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//                     </svg>
//                 </button>
//             </div>
//             {isOpen && (
//                 <div className="absolute top-16 left-0 w-full bg-background-color z-50 flex flex-col items-center space-y-4 py-4 md:hidden mt-12 font-bold">
//                     <Link to="/" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Home</Link>
//                     <Link to="/About" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">About</Link>
//                     <div className="relative">
//                         <button 
//                             onClick={() => setIsProductOpen(!isProductOpen)}
//                             className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer "
//                         >
//                             Product
//                         </button>
//                         {isProductOpen && (
//                             <div className="absolute -left-7 w-24 z-50 mt-2 bg-white shadow-md rounded-md divide-y divide-dashed ">
//                                 <Link to="/Product/Milk" className="block px-4 py-2 hover:text-orange  transition-all duration-300 cursor-pointer">Milk</Link>
//                                 <Link to="/Product/Panner" className="block px-4 py-2 hover:text-orange  transition-all duration-300 cursor-pointer">Paneer</Link>
//                                 <Link to="/Product/Mawa" className="block px-4 py-2 hover:text-orange  transition-all duration-300 cursor-pointer">Mawa</Link>
//                                 <Link to="/Product/Ghee" className="block px-4 py-2 hover:text-orange  transition-all duration-300 cursor-pointer">Ghee</Link>
//                                 <Link to="/Product/Curd" className="block px-4 py-2 hover:text-orange  transition-all duration-300 cursor-pointer">Curd</Link>

//                             </div>
//                         )}
//                     </div>
//                     <Link to="/Order-now" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Order Now</Link>
//                     <Link to="/Services" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Services</Link>
//                     <Link to="/Gallery" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Gallery</Link>
//                     <Link to="/Blog" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Blog</Link>
//                     <Link to="/Contact" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer">Contact</Link>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Navbar;


import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const timeoutRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsOpen(false); // Close the mobile menu on route change
    }, [location]);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsProductOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsProductOpen(false);
        }, 300); // Adjust the delay (300ms) as needed
    };

    const toggleMobileMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMobileMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="fixed top-0 left-0 w-full bg-footer-background shadow h-28 flex items-center justify-between px-4 z-50">
            <div className="logo">
                <img src="../../image/narmada text logo.png" alt='img' className="" width="150px" />
            </div>
            <div className="hidden md:flex space-x-8 md:space-x-12 text-bold md:text-lg items-center justify-center font-bold">
                <Link to="/" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Home</Link>
                <Link to="/About" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>About</Link>
                <div className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <button 
                        className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer"
                    >
                        Product
                    </button>
                    {isProductOpen && (
                        <div 
                            className="absolute -left-5 w-32 bg-white z-40 shadow-md rounded-md mt-2 py-2"
                        >
                            <Link to="/Product/Milk" className="block px-4 py-1 hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Milk</Link>
                            <Link to="/Product/Panner" className="block px-4 py-1 hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Paneer</Link>
                            <Link to="/Product/Mawa" className="block px-4 py-1 hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Mawa</Link>
                            <Link to="/Product/Ghee" className="block px-4 py-1 hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Ghee</Link>
                            <Link to="/Product/Curd" className="block px-4 py-1 hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Curd</Link>
                        </div>
                    )}
                </div>
                <Link to="/Order-now" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Order Now</Link>
                <Link to="/Services" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Services</Link>
                <Link to="/Gallery" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Gallery</Link>
                <Link to="/Blog" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Blog</Link>
                <Link to="/Contact" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Contact</Link>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMobileMenu} className="focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-background-color z-50 flex flex-col items-center space-y-4 py-4 md:hidden mt-12 font-bold">
                    <Link to="/" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Home</Link>
                    <Link to="/About" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>About</Link>
                    <div className="relative">
                        <button 
                            onClick={() => setIsProductOpen(!isProductOpen)}
                            className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer "
                        >
                            Product
                        </button>
                        {isProductOpen && (
                            <div className="absolute -left-7 w-24 z-50 mt-2 bg-white shadow-md rounded-md divide-y divide-dashed ">
                                <Link to="/Product/Milk" className="block px-4 py-2 hover:text-orange  transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Milk</Link>
                                <Link to="/Product/Panner" className="block px-4 py-2 hover:text-orange  transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Paneer</Link>
                                <Link to="/Product/Mawa" className="block px-4 py-2 hover:text-orange  transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Mawa</Link>
                                <Link to="/Product/Ghee" className="block px-4 py-2 hover:text-orange  transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Ghee</Link>
                                <Link to="/Product/Curd" className="block px-4 py-2 hover:text-orange  transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Curd</Link>
                            </div>
                        )}
                    </div>
                    <Link to="/Order-now" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Order Now</Link>
                    <Link to="/Services" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Services</Link>
                    <Link to="/Gallery" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Gallery</Link>
                    <Link to="/Blog" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Blog</Link>
                    <Link to="/Contact" className="hover:text-orange hover:border-b-2 hover:border-orange transition-all duration-300 cursor-pointer" onClick={closeMobileMenu}>Contact</Link>
                </div>
            )}
        </div>
    );
}

export default Navbar;
