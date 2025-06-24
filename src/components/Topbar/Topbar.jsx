import React from "react";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";


function Topbar() {
  return (
    <div className="bg-customBlack text-white hidden lg:flex animate-fade-in">
      <div className="container py-3">
        <div className="flex items-center justify-center">
          
          <div className="ml-auto flex justify-center items-center">
            <div className="ml-10 flex items-center justify-center gap-2 ">
              <FaMapMarkerAlt className="text-lg text-primary" />
              <p className="text-sm">123 Street, New York, USA</p>
            </div>
            <div className="ml-10 flex items-center justify-center gap-2">
              <FaEnvelope className="text-lg text-primary" />

              <p className="text-sm">info@example.com</p>
            </div>
            <div className="ml-10 flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-lg text-primary" />

              <p className="text-sm">+012 345 67890</p>
            </div>
            <div className="ml-10 flex gap-2">
              <a className="bg-primary text-customBlack p-1" href="">
                <FaFacebookF />
              </a>
              <a className="bg-primary text-customBlack p-1" href="">
                <FaTwitter />
              </a>
              <a className="bg-primary text-customBlack p-1" href="">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
