import React from "react";

import logo1 from "../../assets/images/clientLogos/Ashraya Medicals - Google Chrome 09-01-2024 14_11_26.png";

function ClientLogos() {
  const clients = [
    { id: 1, name: "Client 1", logo: logo1 },
    { id: 2, name: "Client 2", logo: logo1 },
    { id: 3, name: "Client 3", logo: logo1 },
    { id: 4, name: "Client 4", logo: logo1 },
    { id: 5, name: "Client 5", logo: logo1 },
    { id: 6, name: "Client 6", logo: logo1 },
  ];
  return (
    <section className="container py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-5xl font-bold text-center mb-5 font-title">
          Our Happy Clients
        </h2>
        <p className="text-center mb-5 lg:mb-12 text-sm lg:text-lg text-para">
          We collaborate closely with a broad spectrum of clients from various
          industries and places.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-7">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 object-contain transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;
