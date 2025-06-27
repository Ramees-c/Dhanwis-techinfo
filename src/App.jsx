import React from "react";
import Home from "./pages/Home/Home";

import PortfolioImg1 from "./assets/images/portfolioImages/Exora Conventions and 14 more pages - Profile 1 - Microsoft_ Edge 11-01-2024 09_08_24.png"

function App() {
  const portfolioContent = [
    {
     id:1,
      image: PortfolioImg1,
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id:2,
      image: PortfolioImg1,
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id:3,
      image: PortfolioImg1,
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      id:4,
      image: PortfolioImg1,
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      id:5,
      image: PortfolioImg1,
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id:6,
      image: PortfolioImg1,
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id:7,
      image: PortfolioImg1,
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      id:8,
      image: PortfolioImg1,
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  ]

  return (
    <div>
     <Home portfolioContent={portfolioContent} />
    </div>
  );
}

export default App;
