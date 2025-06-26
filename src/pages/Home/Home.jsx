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
      desc: "Our company offers digital marketing services that can help you expand your business and reach a global audience in a cost-effective manner. Our team specializes in converting potential leads into loyal customers, ensuring a high return on investment for your marketing efforts.",
    },
    {
      id: 2,
      icon: <FaGlobe className="text-3xl text-white" />,
      heading: "Web Design & Development",
      desc: "We specialize in creating unique and impactful websites that incorporate cutting-edge design techniques. Our websites are crafted with the finest elements that help businesses establish a strong online presence and enhance their brand identity in the digital world.",
    },
    {
      id: 3,
      icon: <IoIosSettings className="text-3xl text-white" />,
      heading: "ERP Development",
      desc: "The development of ERP (Enterprise Resource Planning) involves designing, adapting and managing software systems that merge different business operations and procedures into a cohesive and centralized framework.",
    },
    {
      id: 4,
      icon: <MdPhoneIphone className="text-3xl text-white" />,
      heading: "Mobile App Development",
      desc: "Our team specializes in creating mobile apps that seamlessly work across various mobile devices and online platforms. We offer end-to-end solutions, from designing and integrating the app to managing its entire lifecycle.",
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
        <h2 className="text-2xl lg:text-5xl font-title font-bold text-center mb-5">
          Beautiful Touch by Dhanwis
        </h2>
        <p className="text-center text-sm lg:text-lg mb-10 text-para">
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
        <h2 className="text-2xl lg:text-5xl font-bold text-center mb-5">
          Beautiful Touch by Dhanwis
        </h2>
        <p className="text-center text-sm lg:text-lg mb-5 text-para">
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
