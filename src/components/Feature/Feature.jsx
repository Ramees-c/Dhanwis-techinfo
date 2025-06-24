import React, { useEffect } from "react";

function Feature() {
//   useEffect(() => {
//     document.querySelectorAll('[data-toggle="counter-up"]').forEach((el) => {
//       counterUp(el, {
//         delay: 10,
//         time: 2000,
//       });
//     });

//     const experienceElements = document.querySelectorAll(".experience");
//     experienceElements.forEach((el) => {
//       new Waypoint({
//         element: el,
//         handler: function () {
//           const progressBars = el.querySelectorAll(".progress-bar");
//           progressBars.forEach((bar) => {
//             const width = bar.getAttribute("aria-valuenow") + "%";
//             bar.style.width = width;
//           });
//         },
//         offset: "80%",
//       });
//     });
//   }, []);
  return (
    <div className="mt-24 mb-24">
      <div
        className="bg-right lg:bg-left bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, .1), rgba(0, 0, 0, 1) 50%), url(https://img.freepik.com/free-photo/authentic-small-youthful-marketing-agency_23-2150167353.jpg?uid=R185636078&ga=GA1.1.1884660922.1716013807&semt=ais_items_boosted&w=740)",
        }}
      >
        <div className="container">
          <div className="flex g-0 justify-center lg:justify-end">
            <div className="w-full lg:w-[50%] ">
              <div className="mt-10 lg:mt-17">
                <h1 className=" text-white text-2xl lg:text-5xl font-bold uppercase mb-4">
                  Why You should Choose Our welding Services
                </h1>
                <p className="text-white mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur tellus augue, iaculis id elit eget, ultrices
                  pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu
                  quis, fringilla risus. Pellentesque eu consequat augue.
                </p>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10 pt-2 mb-4">
                  <div>
                    <div className="flex flex-col text-center justify-center items-center border-4 border-primary h-[200px] w-[300px] lg:h-[200px]">
                      <h1 className="text-white text-3xl lg:text-4xl font-bold" data-toggle="counter-up">
                        9999
                      </h1>
                      <p className="text-white text-md lg:text-lg uppercase mb-0">
                        Satisfied Clients
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col text-center justify-center items-center border-4 border-primary w-[300px] h-[200px] lg:h-[200px]">
                      <h1 className="text-white text-3xl lg:text-4xl font-bold" data-toggle="counter-up">
                        9999
                      </h1>
                      <p className="text-white text-md lg:text-lg uppercase mb-0">
                        Complete Projects
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-4 border-primary border-b-0 p-5">
                  <div className="experience mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-white uppercase">Experience</span>
                      <span className="text-white">90%</span>
                    </div>
                    <div className="progress h-1">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="experience">
                    <div className="flex justify-between mb-2">
                      <span className="text-white uppercase">Work Done</span>
                      <span className="text-white">95%</span>
                    </div>
                    <div className="progress h-1">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
