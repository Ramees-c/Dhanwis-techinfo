import React, { useRef } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialCarousel() {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_hybrid&w=740",
      name: "Client Name",
      profession: "Profession",
      content:
        "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_hybrid&w=740",
      name: "Client Name",
      profession: "Profession",
      content:
        "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_hybrid&w=740",
      name: "Client Name",
      profession: "Profession",
      content:
        "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_hybrid&w=740",
      name: "Client Name",
      profession: "Profession",
      content:
        "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  return (
    <div className="py-12 ">
      <div className="mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Animated Images */}
          {/* <div className="w-full lg:w-5/12 relative min-h-[400px] overflow-hidden">
            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className={`absolute w-24 h-24 animate-[flip_5s_infinite]`}
                style={{
                  animationDelay: `${index * 0.3 + 0.1}s`,
                  top:
                    index === 0
                      ? "10%"
                      : index === 1
                      ? "60%"
                      : index === 2
                      ? "20%"
                      : "auto",
                  left:
                    index === 0
                      ? "10%"
                      : index === 1
                      ? "20%"
                      : index === 2
                      ? "60%"
                      : "auto",
                  bottom: index === 3 ? "10%" : undefined,
                  right: index === 3 ? "10%" : undefined,
                }}
              >
                <img
                  src={`https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_hybrid&w=740-${index + 1}.jpg`}
                  alt={`Testimonial ${index + 1}`}
                  className="w-full h-full object-cover relative after:absolute after:inset-0 after:shadow-[0_0_10px_10px_white_inset] after:z-10"
                />
              </div>
            ))}
          </div> */}

          <div className="w-full lg:w-5/12">
            <img
              src="https://img.freepik.com/free-photo/group-positive-young-people-posing-together_23-2148431344.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_hybrid&w=740"
              alt=""
            />
          </div>

          {/* Testimonial Carousel */}
          <div className="w-full lg:w-7/12 relative">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-4 outline-none">
                  <div className="testimonial-item p-6">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 lg:w-24 lg:h-24 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-primary" />
                          ))}
                        </div>
                        <h5 className="text-md lg:text-lg font-bold uppercase">
                          {testimonial.name}
                        </h5>
                        <span className="text-para text-sm lg:text-md">
                          {testimonial.profession}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm lg:text-lg text-para">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Custom Arrows */}
            <div className="flex pl-9 lg:mt-6 space-x-4">
              <button
                onClick={() => sliderRef.current.slickPrev()}
                className="text-primary text-xl lg:text-3xl hover:text-customBlack transition-colors duration-300"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                className="text-primary text-xl lg:text-3xl hover:text-customBlack transition-colors duration-300"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
