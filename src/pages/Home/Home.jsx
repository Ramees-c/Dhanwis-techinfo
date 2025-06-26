import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";
import About from "../../components/About/About";
import Feature from "../../components/Feature/Feature";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

import { FaHammer } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { FaGlobe } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";
import ClientLogos from "../../components/ClientLogos/ClientLogos";
import CustomCard from "../../components/CustomCard/CustomCard";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import PortfolioTab from "../../components/PortfolioTab/PortfolioTab";
import TestimonialCarousel from "../../components/TestimonialCarousel/TestimonialCarousel";
import Footer from "../../components/Footer/Footer";
import Copyright from "../../components/Copyright/Copyright";

function Home({ portfolioContent }) {
  const serviceButtonContent = [
    {
      id: 1,
      icon: <HiSpeakerphone className="text-3xl text-white" />,
      heading: "Digital Marketing",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur aliquid aperiam sit deserunt nam consequatur magnam maxime, fugit nisi natus.",
    },
    {
      id: 2,
      icon: <FaGlobe className="text-3xl text-white" />,
      heading: "Web Design & Development",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur aliquid aperiam sit deserunt nam consequatur magnam maxime, fugit nisi natus.",
    },
    {
      id: 3,
      icon: <IoIosSettings className="text-3xl text-white" />,
      heading: "ERP Development",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur aliquid aperiam sit deserunt nam consequatur magnam maxime, fugit nisi natus.",
    },
    {
      id: 4,
      icon: <MdPhoneIphone className="text-3xl text-white" />,
      heading: "Mobile App Development",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur aliquid aperiam sit deserunt nam consequatur magnam maxime, fugit nisi natus.",
    },
  ];

  return (
    <div>
      <Topbar />
      <Navbar />
      <Carousel />
      <ClientLogos />
      <About />
      <Feature />
      <div className="container mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-0">
          {serviceButtonContent.map((item) => (
            <ServiceCard
              key={item.id}
              icon={item.icon}
              heading={item.heading}
              desc={item.desc}
            />
          ))}
        </div>
      </div>

      {/* Portfolio section */}
      <div className="container mb-24">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-3">
          Beautiful Touch by Dhanwis
        </h2>
        <p className="text-center text-sm lg:text-md mb-10 text-para">
          We collaborate closely with a broad spectrum of clients from various
          industries and places.
        </p>
        <div className="mb-10 text-center">
          <PortfolioTab />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-0">
          {portfolioContent.map((item) => (
            <CustomCard
              key={item.id}
              title={item.title}
              image={item.image}
              desc={item.desc}
            />
          ))}
        </div>
        <div className="text-center mb-24">
          <CustomBtn btntext="View More" />
        </div>
      </div>
      <div className="container">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-3">
          Beautiful Touch by Dhanwis
        </h2>
        <p className="text-center text-sm lg:text-md mb-5 text-para">
          We collaborate closely with a broad spectrum of clients from various
          industries and places.
        </p>
        <TestimonialCarousel />
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default Home;
