import React from "react";
import Home from "./pages/Home/Home";

function App() {
  const portfolioContent = [
    {
      id:1,
      image: "http://dhanwis.com/img/portfolio/Exora%20Conventions%20and%2014%20more%20pages%20-%20Profile%201%20-%20Microsoft%E2%80%8B%20Edge%2011-01-2024%2009_08_24.png",
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      id:2,
      image: "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_items_boosted&w=740",
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id:3,
      image: "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_items_boosted&w=740",
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      id:4,
      image: "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_items_boosted&w=740",
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      id:5,
      image: "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_items_boosted&w=740",
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id:6,
      image: "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_items_boosted&w=740 ",
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id:7,
      image: "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_items_boosted&w=740",
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      id:8,
      image: "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_items_boosted&w=740",
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
