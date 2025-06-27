import React from "react";
import { FaUsersCog, FaTachometerAlt, FaCheckSquare } from "react-icons/fa";

function About() {
  return (
    <div className="pt-[16px] lg:pt-[80px] pb-6 w-full lg:w-[90%] mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 place-items-center">
          {/* Image Column */}
          <div>
            <div className="relative mb-10 xl:mb-0">
              <img
                className="w-[500px] h-auto"
                src="https://img.freepik.com/free-photo/group-confident-businesspeople-office_107420-84863.jpg?uid=R185636078&ga=GA1.1.1884660922.1716013807&semt=ais_hybrid&w=740"
                alt="About our company"
              />
              {/* Decorative border effect */}
              <div className="absolute w-[200px] h-[300px] top-[-35px] left-[-50px] border-[5px] border-primary animate-bounce opacity-70 -z-10 mt-10 hidden lg:block"></div>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-title font-bold uppercase mb-4">
              Ultimate Welding and Quality Metal Solutions
            </h1>
            <p className="mb-4 text-para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
              laudantium repellendus corporis odio nulla dolores vitae ducimus
              tenetur eos quibusdam consectetur tempore, dicta cum nemo nostrum
              iure accusantium debitis exercitationem? Ratione et quidem eius
              vitae illo magni soluta suscipit voluptatem quod, laborum nam
              consequatur iusto dolores. Asperiores quod quam eaque!
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-light rounded flex items-center justify-center mr-3">
                  <FaUsersCog className="text-3xl text-primary" />
                </div>
                <h5 className="leading-tight text-lg uppercase mb-0 font-medium">
                  Certified Expert & Team
                </h5>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-light rounded flex items-center justify-center mr-3">
                  <FaTachometerAlt className="text-2xl text-primary" />
                </div>
                <h5 className="leading-tight text-lg uppercase mb-0 font-medium">
                  Fast & Reliable Services
                </h5>
              </div>
            </div>

            {/* Check List */}
            <div className="space-y-2 mb-4">
              <p className="flex items-center text-para">
                <FaCheckSquare className="text-primary mr-3" />
                Many variations of passages of lorem ipsum
              </p>
              <p className="flex items-center text-para">
                <FaCheckSquare className="text-primary mr-3" />
                Many variations of passages of lorem ipsum
              </p>
              <p className="flex items-center text-para">
                <FaCheckSquare className="text-primary mr-3" />
                Many variations of passages of lorem ipsum
              </p>
            </div>

            {/* Highlight Box */}
            <div className="border-[5px] border-primary p-4 text-center mt-5">
              <h4 className="leading-tight uppercase mb-0 font-medium text-lg lg:text-2xl">
                We're Good in All Metal Works Using Quality Welding Tools
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
