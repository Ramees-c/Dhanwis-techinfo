import React from "react";

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import logo from "../../assets/images/logo/Techinfo 1.png";

function Footer() {
  return (
    <div className="bg-customBlack py-16 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img className="w-[80px] lg:w-[140px] mb-3" src={logo} alt="logo" />
            <p className="mb-2 flex gap-2 text-white items-center">
              <FaLocationArrow className="text-primary" />
              123 Street, New York, USA
            </p>
            <p className="mb-2 flex gap-2 text-white items-center">
              <FaMobileAlt className="text-primary" />
              +012 345 67890
            </p>
            <p className="mb-2 flex gap-2 text-white items-center">
              <MdEmail className="text-primary" />
              info@example.com
            </p>
            <div className="flex pt-3">
              <a
                className="bg-primary mr-2 w-8 h-8 flex items-center justify-center hover:bg-white duration-300 hover:text-primary"
                href=""
              >
                <FaTwitter className="text-lg" />
              </a>
              <a
                className="bg-primary mr-2 w-8 h-8 flex items-center justify-center hover:bg-white duration-300 hover:text-primary"
                href=""
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                className="bg-primary mr-2 w-8 h-8 flex items-center justify-center hover:bg-white duration-300 hover:text-primary"
                href=""
              >
                <FaYoutube className="text-lg" />
              </a>
              <a
                className="bg-primary mr-2 w-8 h-8 flex items-center justify-center hover:bg-white duration-300 hover:text-primary"
                href=""
              >
                <FaLinkedinIn className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-uppercase text-primary mb-4 text-xl lg:text-2xl font-title font-semibold">
              Quick Links
            </h5>

            <a
              className="flex items-center gap-1 text-md lg:text-lg text-white hover:text-primary duration-300 hover:ml-2 mb-2"
              href=""
            >
              <IoIosArrowForward />
              Home
            </a>
            <a
              className="flex items-center gap-1 text-md lg:text-lg text-white hover:text-primary duration-300 hover:ml-2 mb-2"
              href=""
            >
              <IoIosArrowForward />
              About
            </a>
            <a
              className="flex items-center gap-1 text-md lg:text-lg text-white hover:text-primary duration-300 hover:ml-2 mb-2"
              href=""
            >
              <IoIosArrowForward />
              Services
            </a>
            <a
              className="flex items-center gap-1 text-md lg:text-lg text-white hover:text-primary duration-300 hover:ml-2 mb-2"
              href=""
            >
              <IoIosArrowForward />
              Contact
            </a>
          </div>

          {/* Business Hours */}
          <div>
            <h5 className="text-uppercase text-primary mb-4 text-xl lg:text-2xl font-title font-semibold">
              Business Hours
            </h5>
            <p className="text-uppercase text-white text-md lg:text-lg mb-0">Monday - Saturday</p>
            <p className="mb-2 text-white text-md lg:text-lg">09:00 am - 06:00 pm</p>
            <p className="text-uppercase mb-0 text-white text-md lg:text-lg">Sunday</p>
            <p className="text-white text-md lg:text-lg">Closed</p>
          </div>

          {/* Gallery */}
          <div>
            <h5 className="text-uppercase text-primary mb-4 text-xl lg:text-2xl font-title font-semibold">
              Gallery
            </h5>
            <div className="grid grid-cols-3 gap-1">
              <div className="col-span-1">
                <img
                  className="w-full h-auto"
                  src="https://img.freepik.com/premium-photo/young-indian-man-suit-giving-expression-white-background_75648-9448.jpg?uid=R185636078&ga=GA1.1.1884660922.1716013807&semt=ais_items_boosted&w=740"
                  alt=""
                />
              </div>
              <div className="col-span-1">
                <img
                  className="w-full h-auto"
                  src="https://img.freepik.com/premium-photo/young-indian-man-suit-giving-expression-white-background_75648-9448.jpg?uid=R185636078&ga=GA1.1.1884660922.1716013807&semt=ais_items_boosted&w=740"
                  alt=""
                />
              </div>
              <div className="col-span-1">
                <img
                  className="w-full h-auto"
                  src="https://img.freepik.com/premium-photo/young-indian-man-suit-giving-expression-white-background_75648-9448.jpg?uid=R185636078&ga=GA1.1.1884660922.1716013807&semt=ais_items_boosted&w=740"
                  alt=""
                />
              </div>
              <div className="col-span-1">
                <img
                  className="w-full h-auto"
                  src="https://img.freepik.com/premium-photo/young-indian-man-suit-giving-expression-white-background_75648-9448.jpg?uid=R185636078&ga=GA1.1.1884660922.1716013807&semt=ais_items_boosted&w=740"
                  alt=""
                />
              </div>
              <div className="col-span-1">
                <img
                  className="w-full h-auto"
                  src="https://img.freepik.com/premium-photo/young-indian-man-suit-giving-expression-white-background_75648-9448.jpg?uid=R185636078&ga=GA1.1.1884660922.1716013807&semt=ais_items_boosted&w=740"
                  alt=""
                />
              </div>
              <div className="col-span-1">
                <img
                  className="w-full h-auto"
                  src="https://img.freepik.com/premium-photo/young-indian-man-suit-giving-expression-white-background_75648-9448.jpg?uid=R185636078&ga=GA1.1.1884660922.1716013807&semt=ais_items_boosted&w=740"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
