import React from "react";

function Copyright() {
  return (
    <div className="bg-black text-white py-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 text-center text-xs lg:text-[14px] md:text-start mb-3 md:mb-0">
            &copy;{" "}
            <a
              className="font-semibold hover:text-primary transition-colors duration-300"
              href="#"
            >
              Dhanwis TechInfo Solutions
            </a>
            , All Right Reserved.
          </div>
          <div className="w-full md:w-1/2 text-center text-xs lg:text-[14px] md:text-end">
            Designed By{" "}
            <a
              className="hover:text-primary transition-colors duration-300"
              href="https://themewagon.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dhanwis TechInfo Solutions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Copyright;
