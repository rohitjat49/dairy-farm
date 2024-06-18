// import React, { useEffect, useState } from "react";

// const slidesData = [
//   {
//     id: 1,
//     image: "/public/image/slider-2-1.jpg",
//     content: "Web development: building websites",
//     content1:
//       "Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.",
//   },
//   {
//     id: 2,
//     image: "/image/slider-2-1.jpg",
//     content: "Slide 2 Content",
//   },
//   {
//     id: 3,
//     image: "/image/slider-2-1.jpg",
//     content: "Slide 3 Content",
//   },
 
// ];

// const SliderComponent
//  = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
//     }, 3000); // Change slide every 2 seconds (2000 milliseconds)

//     return () => clearInterval(interval);
//   }, [slidesData.length]);

//   return (
//     <div className="slider-container">
//       <div className="slides">
//         {slidesData.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={index === currentSlide ? "slide active" : "slide"}
//             // style={{ backgroundImage: urlurl(${slide.image})}}
//           >
//             <div className="overlay">
//               <div>
//                 <span
//                   className="content"
//                   style={{ textAlign: "center", alignItems: "center" }}
//                 >
//                   {slide.content}
//                 </span>
//                 <br />
//                 <span className="content1">{slide.content1}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//         <button className="prev" onClick={prevSlide}>
//           &#10094;
//         </button>
//         <button className="next" onClick={nextSlide}>
//           &#10095;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SliderComponent
// ;
// import React, { useEffect, useState } from "react";

// const slidesData = [
//   {
//     id: 1,
//     image: "/image/slider-2-1.jpg",
//     content: "Web development: building websites",
//     content1: "",
//   },
//   {
//     id: 2,
//     image: "/image/slider-2-2.jpg",
//     content: "Slide 2 Content",
//   },
//   {
//     id: 3,
//     image: "/image/slider-2-3.jpg",
//     content: "Slide 3 Content",
//   },
// ];

// const SliderComponent = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full overflow-hidden">
//       <div className="relative">
//         {slidesData.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`
//               ${index === currentSlide ? 'block' : 'hidden'}
//               sm:w-full sm:h-96 sm:bg-cover sm:bg-center sm:transition-transform sm:duration-500 sm:ease-in-out
//             `}
//           >
//             <img
//               src={process.env.PUBLIC_URL + slide.image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-96 object-cover object-center"
//             />
//             <div
//               className="absolute top-1/2 transform -translate-y-1/2 bg-opacity-50 bg-black text-white border-none px-4 py-2 cursor-pointer left-4"
//               onClick={prevSlide}
//             >
//               &#10094;
//             </div>
//             <div
//               className="absolute top-1/2 transform -translate-y-1/2 bg-opacity-50 bg-black text-white border-none px-4 py-2 cursor-pointer right-4"
//               onClick={nextSlide}
//             >
//               &#10095;
//             </div>
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:bottom-32 sm:w-96 sm:bg-opacity-40 sm:bg-gray-800 sm:flex sm:justify-center sm:rounded-lg sm:p-14 sm:flex-col sm:items-center">
//               <span className="text-white text-5xl font-semibold">{slide.content}</span>
//               <br />
//               <span className="text-white text-lg">{slide.content1}</span>
//               <br />
//               <button className="bg-orange py-2 px-3 rounded-full mt-8 transition-all duration-300 ease-in-out transform hover:bg-yellow-400 hover:scale-105">
//                 Order Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SliderComponent;

// import React, { useEffect, useState } from "react";

// const slidesData = [
//   {
//     id: 1,
//      image: "/image/slider-2-1.jpg",
//     content: "Web development: building websites",
//     content1:
//       "Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.",
//   },
//   {
//     id: 2,
//      image: "/image/slider-2-2.jpg",
//     content: "Slide 2 Content",
//   },
//   {
//     id: 3,
//     image: "/image/slider-2-3.jpg",
//     content: "Slide 3 Content",
//   },
//   {
//     id: 4,
//      image: "/image/slider-2-1.jpg",
//     content: "Slide 4 Content",
//   },
// ];

// const SliderComponent
//  = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
//     }, 3000); // Change slide every 2 seconds (2000 milliseconds)

//     return () => clearInterval(interval);
//   }, [slidesData.length]);

//   return (
//     <div className="slider-container">
//       <div className="slides">
//         {slidesData.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={index === currentSlide ? "slide active" : "slide"}
//             style={{
//               backgroundImage: `url(${slide.image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               minHeight: "400px",
//               width: "100%",
//               display: `${index === currentSlide ? "block" : "none"}`,
//             }}
//           >
//             <div className="overlay">
//               <div>
//                 <span
//                   className="content"
//                   style={{ textAlign: "center", alignItems: "center" }}
//                 >
//                   {slide.content}
//                 </span>
//                 <br />
//                 <span className="content1">{slide.content1}</span>
//                 <br/>
//                 <button className="bg-orange py-2 px-3 rounded-full mt-8 transition-all duration-300 ease-in-out transform hover:bg-yellow-400 hover:scale-105">
//                 Order Now
//                </button>
//               </div>
//             </div>
//           </div>
//         ))}
//         <button className="prev" onClick={prevSlide}>
//           &#10094;
//         </button>
//         <button className="next" onClick={nextSlide}>
//           &#10095;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SliderComponent;


// import React, { useEffect, useState } from "react";

// const slidesData = [
//   {
//     id: 1,
//     image: "/image/slider-2-1.jpg",
//     content: "Web development: building websites",
//     content1:
//       "Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.",
//   },
//   {
//     id: 2,
//     image: "/image/slider-2-2.jpg",
//     content: "Slide 2 Content",
//   },
//   {
//     id: 3,
//     image: "/image/slider-2-3.jpg",
//     content: "Slide 3 Content",
//   },
//   {
//     id: 4,
//     image: "/image/slider-2-1.jpg",
//     content: "Slide 4 Content",
//   },
// ];

// const SliderComponent = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
//     }, 3000); // Change slide every 3 seconds (3000 milliseconds)

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <div className="relative flex transition-transform duration-500">
//         {slidesData.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentSlide ? "opacity-100" : "opacity-0"
//             }`}
//             style={{
//               backgroundImage: `url(${slide.image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               minHeight: "400px",
//               width: "100%",
//             }}
//           >
//             <div className="  h-full flex items-center justify-center">
//               <div className="text-center  text-white p-4 mt-16 ">
//                 <span className="block text-2xl sm:text-4xl font-semibold mb-2">
//                   {slide.content}
//                 </span>
//                 {slide.content1 && (
//                   <span className="block text-sm sm:text-lg">{slide.content1}</span>
//                 )}
//                 <br />
//                 <button className="bg-orange py-2 px-3 rounded-full mt-8 transition-all duration-300 ease-in-out transform hover:bg-yellow-400 hover:scale-105">
//                   Order Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-75 text-black p-2 rounded-full shadow-md cursor-pointer"
//         onClick={prevSlide}
//       >
//         &#10094;
//       </button>
//       <button
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-75 text-black p-2 rounded-full shadow-md cursor-pointer"
//         onClick={nextSlide}
//       >
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default SliderComponent;

import React, { useEffect, useState } from "react";

const slidesData = [
  {
    id: 1,
    image: "/image/slider-2-1.jpg",
    content: "Web development: building websites",
    content1:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.",
  },
  {
    id: 2,
    image: "/image/slider-2-2.jpg",
    content: "Slide 2 Content",
  },
  {
    id: 3,
    image: "/image/slider-2-3.jpg",
    content: "Slide 3 Content",
  },
  {
    id: 4,
    image: "/image/slider-2-1.jpg",
    content: "Slide 4 Content",
  },
];

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 3000); // Change slide every 3 seconds (3000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative flex transition-transform duration-500">
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
             style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "600px",
          
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center text-white p-4 sm:p-8 mt-16 sm:mt-24">
                <span className="block text-2xl sm:text-4xl font-semibold mb-2">
                  {slide.content}
                </span>
                {slide.content1 && (
                  <span className="block text-sm sm:text-lg">
                    {slide.content1}
                  </span>
                )}
                <br />
                <button className="bg-orange py-2 px-3 sm:py-3 sm:px-4 rounded-full mt-8 sm:mt-12 transition-all duration-300 ease-in-out transform hover:bg-yellow-400 hover:scale-105">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 sm:left-8 transform -translate-y-1/2 bg-white bg-opacity-75 text-black p-2 rounded-full shadow-md cursor-pointer z-10"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 sm:right-8 transform -translate-y-1/2 bg-white bg-opacity-75 text-black p-2 rounded-full shadow-md cursor-pointer z-10"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default SliderComponent;
