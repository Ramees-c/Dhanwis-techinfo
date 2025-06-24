import React from "react";
import { FaHammer } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function ServiceCard({icon, heading, desc}) {
  return (
    <div className="w-[90%] mx-auto mb-10">
      <div className="border border-opacity-5 border-gray-800 h-full transition-all duration-300 shadow-md lg:shadow-lg group">
        <div className="feature-icon w-16 h-16 bg-primary flex items-center justify-center mb-4 -mt-5 transition-all duration-500 group-hover:ml-12">
         {icon}
        </div>
        <div className="pl-5 pb-5 pr-1 pt-0">
          <h5 className="text-uppercase text-xl font-semibold mb-3">
            {heading}
          </h5>
          <p className="text-para text-sm lg:text-md mb-4">
            {desc}
          </p>
          <a
            href="#"
            className="text-gray-700 text-md uppercase flex justify-between items-center hover:text-primary transition-colors duration-300 mr-1"
          >
            <span>Read More</span>
            <FaArrowRightLong  />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
