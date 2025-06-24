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
        "https://img.freepik.com/free-photo/thoughtful-woman-with-notebook_23-2147771761.jpg?uid=R185636078&ga=GA1.1.1884660922.1716013807&semt=ais_hybrid&w=740",
      title: "Driving Growth Through Digital Solutions ",
      desc: "Our all-inclusive range of digital solutions includes web development, mobile app development, and digital marketing, guaranteeing a comprehensive approach to fulfill your company requirements.",
      buttonText: "Explore More",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/notepad-pencils-left_23-2147843216.jpg?uid=R185636078&ga=GA1.1.1884660922.1716013807&semt=ais_hybrid&w=740",
      title: "Driving Growth Through Digital Solutions ",
      desc: "Our all-inclusive range of digital solutions includes web development, mobile app development, and digital marketing, guaranteeing a comprehensive approach to fulfill your company requirements.",
      buttonText: "Explore More",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/wooden-multicolored-pencils-white-background-isolated-top-view_169016-37961.jpg?uid=R185636078&ga=GA1.1.1884660922.1716013807&semt=ais_hybrid&w=740",
      title: "Driving Growth Through Digital Solutions ",
      desc: "Our all-inclusive range of digital solutions includes web development, mobile app development, and digital marketing, guaranteeing a comprehensive approach to fulfill your company requirements.",
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
            <div className="absolute inset-0 flex flex-col items-start justify-center p-12 pl-10 lg:pl-44 z-10 animate-zoomIn">
              <div className="w-full lg:w-[60%]">
                <h1 className="text-4xl md:text-6xl xl:text-7xl text-primary font-bold uppercase mb-5">
                  {slide.title}
                </h1>
                <p className="text-black mb-5 text-base">{slide.desc}</p>
                <CustomBtn btntext={slide.buttonText} />
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <div className="hidden lg:block">
          <button
            onClick={goToPrevSlide}
            className="absolute left-12 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-10 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300"
            aria-label="Previous slide"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-12 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-10 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300"
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
