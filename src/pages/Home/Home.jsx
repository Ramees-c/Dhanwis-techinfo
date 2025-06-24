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

function Home() {
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
      icon: <FaHammer className="text-3xl text-white" />,
      heading: "Mobile App Development",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur aliquid aperiam sit deserunt nam consequatur magnam maxime, fugit nisi natus.",
    },
  ];

  return (
    <div>
      <Topbar />
      <Navbar />
      <Carousel />
      <About />
      <Feature />
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-5">
          {
          serviceButtonContent.map((item) => (
            <ServiceCard key={item.id} icon={item.icon} heading={item.heading} desc={item.desc} />
          ))
        }
        </div>
      </div>
    </div>
  );
}

export default Home;
