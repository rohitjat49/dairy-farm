import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const slidesData = [
  {
    id: 1,
    image: "/image/slider-2-3.jpg",
    content: "Slide 1 Content",
    content1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti accusamus provident aperiam, doloremque alias cumque sequi nobis! Impedit laboriosam accusamus voluptatem quia odio consectetur perspiciatis!"
    
  },
  {
    id: 2,
    image: "/image/slider-2-3.jpg",
    content: "Slide 2 Content",
  },
  {
    id: 3,
    image: "/image/slider-2-3.jpg",
    content: "Slide 3 Content",
  },
];

const SliderComponent = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/Order-now`);
  };

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
            <div className="h-full flex items-center justify-center ">
              <div className="text-center text-white p-4 sm:p-8 mt-16 sm:mt-24">
                <span className="block text-2xl sm:text-4xl font-semibold mb-2">
                  {slide.content}
                </span>
                {slide.content1 && (
                  <span className="block text-sm sm:text-lg px-8">
                    {slide.content1}
                  </span>
                )}
                <br />
                <button
                className="bg-orange text-black py-4 px-8 rounded-3xl font-bold text-xl"
                  onClick={handleButtonClick}
                >
                  Order Now
                </button>
                {/* className="bg-orange hover:bg-yellow-400 hover:scale-105 text-white py-4 px-8 font-semibold sm:py-8 sm:px-8 text-3xl rounded-full mt-8 sm:mt-12 transition-all duration-300 ease-in-out" */}

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
