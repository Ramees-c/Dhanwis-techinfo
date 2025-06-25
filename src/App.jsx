import React from "react";
import Home from "./pages/Home/Home";

function App() {
  const portfolioContent = [
    {
      id:1,
      image: "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_items_boosted&w=740",
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius odit dignissimos nulla ad assumenda? Odio magni nam incidunt perferendis doloribus?",
    },
    {
      id:2,
      image: "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_items_boosted&w=740",
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius odit dignissimos nulla ad assumenda? Odio magni nam incidunt perferendis doloribus?",
    },
    {
      id:3,
      image: "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_items_boosted&w=740",
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius odit dignissimos nulla ad assumenda? Odio magni nam incidunt perferendis doloribus?",
    },
    {
      id:4,
      image: "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_items_boosted&w=740",
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius odit dignissimos nulla ad assumenda? Odio magni nam incidunt perferendis doloribus?",
    },
    {
      id:5,
      image: "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_items_boosted&w=740",
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius odit dignissimos nulla ad assumenda? Odio magni nam incidunt perferendis doloribus?",
    },
    {
      id:6,
      image: "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_items_boosted&w=740",
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius odit dignissimos nulla ad assumenda? Odio magni nam incidunt perferendis doloribus?",
    },
    {
      id:7,
      image: "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_items_boosted&w=740",
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius odit dignissimos nulla ad assumenda? Odio magni nam incidunt perferendis doloribus?",
    },
    {
      id:8,
      image: "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg?ga=GA1.1.1246216932.1730456119&semt=ais_items_boosted&w=740",
      title: "title",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius odit dignissimos nulla ad assumenda? Odio magni nam incidunt perferendis doloribus?",
    },
  ]

  return (
    <div>
     <Home portfolioContent={portfolioContent} />
    </div>
  );
}

export default App;
