import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function CustomCard({ title, image, desc }) {
  return (
    <div className="px-4">
      <div className="relative">
        <div className="shadow-[0_0_45px_rgba(0,0,0,0.05)] h-full lg:w-[330px] pb-5 mb-10  group">
          <div className="absolute bottom-0 left-0 w-[330px] h-0 bg-primary transition-all duration-1000 ease-in-out group-hover:h-full group-hover:top-0"></div>
          <img
            className="  w-full h-[200px] lg:h-[250px]  transition-all duration-500 relative z-[1]"
            src={image}
            alt="Metal Works"
          />
          <div className="pl-5 relative mt-10 z-[1]">
            <h5 className="text-lg font-bold uppercase mb-2 text-black group-hover:text-white transition-colors duration-500">
              {title}
            </h5>
            <p className="text-para text-md group-hover:text-white transition-colors duration-500">
              {desc}
            </p>
          </div>
          <div className=" mt-4 relative z-[1]">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-white text-gray-800 px-3 py-2 transition-all duration-500 group-hover:pl-[45px] group-hover:bg-white"
            >
              View Project
              <MdKeyboardDoubleArrowRight className="ml-1 text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
