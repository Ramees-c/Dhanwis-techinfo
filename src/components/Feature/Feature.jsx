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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus iste consequatur quam quibusdam! Atque, consectetur
                  recusandae. Distinctio similique, ea quibusdam aspernatur eum
                  sit natus est unde laudantium quo beatae, animi ratione
                  repellat. Quasi eaque quis sed alias reiciendis sapiente
                  molestiae. Fugiat a similique magni! Aut doloribus eligendi
                  necessitatibus illo voluptates laudantium ullam quam unde ipsa
                  facilis, ut pariatur placeat sed nisi molestias nulla nobis
                  velit veniam eum quasi officia ipsum.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-10 pt-2 mb-5 lg:mb-10">
                  <div>
                    <div className="flex flex-col text-center justify-center items-center border-4 border-primary h-[140px] w-[300px] xl:h-[200px]">
                      <h1
                        className="text-white text-3xl lg:text-4xl font-bold"
                        data-toggle="counter-up"
                      >
                        9999
                      </h1>
                      <p className="text-white text-md lg:text-lg uppercase mb-0">
                        Satisfied Clients
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col text-center justify-center items-center border-4 border-primary w-[300px] h-[140px] xl:h-[200px]">
                      <h1
                        className="text-white text-3xl lg:text-4xl font-bold"
                        data-toggle="counter-up"
                      >
                        9999
                      </h1>
                      <p className="text-white text-md lg:text-lg uppercase mb-0">
                        Complete Projects
                      </p>
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
