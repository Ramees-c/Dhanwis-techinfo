import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./Carousel.css";
import CustomBtn from "../CustomBtn/CustomBtn";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww",
      title: "Best Metalcraft Solutions",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur odio perspiciatis unde facere alias velit est ratione ullam ipsum?",
      buttonText: "Explore More",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Best Metalcraft",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur odio perspiciatis unde facere alias velit est ratione ullam ipsum?",
      buttonText: "Explore More",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Best ",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur odio perspiciatis unde facere alias velit est ratione ullam ipsum?",
      buttonText: "Explore More",
    },
  ];

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrevSlide = () => {
    goToSlide((activeIndex - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    goToSlide((activeIndex + 1) % slides.length);
  };

  // Auto-rotate slides - FIXED VERSION
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, goToNextSlide]); // Added goToNextSlide to dependencies

  return (
    <div className="w-full mb-12 overflow-hidden relative">
      {/* Carousel Slides */}
      <div className="relative w-full" style={{ height: "600px" }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              activeIndex === index
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Caption */}
            <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-70 p-12 pl-10 lg:pl-44 z-10">
              <div className="w-[60%]">
                <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-white uppercase mb-5 animate-zoomIn">
                {slide.title}
              </h1>
              <p className="text-white mb-5 text-base">{slide.desc}</p>
              <CustomBtn btntext={slide.buttonText} />
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <div className="hidden lg:block">
            <button
          onClick={goToPrevSlide}
          className="absolute left-12 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300"
          aria-label="Previous slide"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-12 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300"
          aria-label="Next slide"
        >
          <FaChevronRight size={24} />
        </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
