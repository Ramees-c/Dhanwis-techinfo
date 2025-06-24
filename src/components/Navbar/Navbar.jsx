import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

import logo from "../../assets/images/logo/Techinfo 1.png";
import CustomBtn from "../CustomBtn/CustomBtn";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`bg-white sticky top-0 z-50 transition-all duration-500 ${
        isSticky ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto">
        <nav className="bg-white p-3">
          <div className="flex items-center justify-between">
            {/* Mobile logo */}
            <a href="index.html" className="mr-[80px]">
              <img className="w-[80px] lg:w-[140px]" src={logo} alt="logo" />
            </a>

            {/* Mobile menu button */}
            <button
              className="lg:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="#ebb741"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center w-full">
              <div className="flex items-center">
                <a
                  href="index.html"
                  className="mr-[35px] py-[25px] text-dark uppercase font-semibold text-base hover:text-primary active:text-primary"
                >
                  Home
                </a>
                <a
                  href="about.html"
                  className="mr-[35px] py-[25px] text-dark uppercase font-semibold text-base hover:text-primary"
                >
                  About
                </a>
                <a
                  href="service.html"
                  className="mr-[35px] py-[25px] text-dark uppercase font-semibold text-base hover:text-primary"
                >
                  Services
                </a>

                {/* Dropdown */}
                <div className="relative group mr-[35px]">
                  <button className="flex items-center py-[25px] text-dark uppercase font-semibold text-base hover:text-primary focus:outline-none">
                    Pages
                    <FaChevronDown className="ml-2" />
                  </button>
                  <div className="absolute w-[300px] left-0 mt-3 bg-light opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg rounded-b bg-white">
                    <a
                      href="feature.html"
                      className="block px-4 py-2 text-dark hover:bg-primary hover:text-white"
                    >
                      Features
                    </a>
                    <a
                      href="team.html"
                      className="block px-4 py-2 text-dark hover:bg-primary hover:text-white"
                    >
                      Our Team
                    </a>
                    <a
                      href="testimonial.html"
                      className="block px-4 py-2 text-dark hover:bg-primary hover:text-white"
                    >
                      Testimonial
                    </a>
                    <a
                      href="appoinment.html"
                      className="block px-4 py-2 text-dark hover:bg-primary hover:text-white"
                    >
                      Appoinment
                    </a>
                    <a
                      href="404.html"
                      className="block px-4 py-2 text-dark hover:bg-primary hover:text-white"
                    >
                      404 Page
                    </a>
                  </div>
                </div>

                <a
                  href="contact.html"
                  className="mr-[35px] py-[25px] text-dark uppercase font-semibold text-base hover:text-primary"
                >
                  Contact
                </a>
              </div>

              <div className="ml-auto hidden lg:block">
                <CustomBtn btntext="Contact" />
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
            <div className="flex flex-col space-y-2 mt-4">
              <a
                href="index.html"
                className="text-dark uppercase font-semibold text-base hover:text-primary"
              >
                Home
              </a>
              <a
                href="about.html"
                className="text-dark uppercase font-semibold text-base hover:text-primary"
              >
                About
              </a>
              <a
                href="service.html"
                className="text-dark uppercase font-semibold text-base hover:text-primary"
              >
                Services
              </a>

              {/* Mobile dropdown */}
              <div className="relative">
                <button
                  className="flex items-center text-dark uppercase font-semibold text-base hover:text-primary focus:outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Pages
                  <FaChevronDown className="ml-2" />
                </button>
                <div className={`ml-4 mt-2 ${isOpen ? "block" : "hidden"}`}>
                  <a
                    href="feature.html"
                    className="block py-1 text-dark hover:text-primary"
                  >
                    Features
                  </a>
                  <a
                    href="team.html"
                    className="block py-1 text-dark hover:text-primary"
                  >
                    Our Team
                  </a>
                  <a
                    href="testimonial.html"
                    className="block py-1 text-dark hover:text-primary"
                  >
                    Testimonial
                  </a>
                  <a
                    href="appoinment.html"
                    className="block py-1 text-dark hover:text-primary"
                  >
                    Appoinment
                  </a>
                  <a
                    href="404.html"
                    className="block py-1 text-dark hover:text-primary"
                  >
                    404 Page
                  </a>
                </div>
              </div>

              <a
                href="contact.html"
                className="text-dark uppercase font-semibold text-base hover:text-primary"
              >
                Contact
              </a>
              <CustomBtn btntext="Contact" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
