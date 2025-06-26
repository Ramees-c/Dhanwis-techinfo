import React from "react";

function ClientLogos() {
  const clients = [
    { id: 1, name: "Client 1", logo: "http://dhanwis.com/img/clients/Ashraya%20Medicals%20-%20Google%20Chrome%2009-01-2024%2014_11_26.png" },
    { id: 2, name: "Client 2", logo: "http://dhanwis.com/img/clients/Ashraya%20Medicals%20-%20Google%20Chrome%2009-01-2024%2014_10_23.png" },
    { id: 3, name: "Client 3", logo: "http://dhanwis.com/img/clients/GOLDMAN%20INTERIORS%20LLP%20_%20BEST%20BUILDERS%20IN%20KERALA%20AND%20MIDDLE%20EAST%20-%20Google%20Chrome%2009-01-2024%2014_10_13.png" },
    { id: 4, name: "Client 4", logo: "http://dhanwis.com/img/clients/Ashraya%20Medicals%20-%20Google%20Chrome%2009-01-2024%2014_11_12.png" },
    { id: 5, name: "Client 5", logo: "http://dhanwis.com/img/clients/Ashraya%20Medicals%20-%20Google%20Chrome%2009-01-2024%2014_10_52.png" },
    { id: 6, name: "Client 6", logo: "http://dhanwis.com/img/clients/Cinema%20News%20Agency%20_%20Exclusive%20Cinema%20Magazine%20in%20Malayalam%20and%2018%20more%20pages%20-%20Profile%201%20-%20Microsoft%E2%80%8B%20Edge%2010-01-2024%2014_21_52.png" },
  ];
  return (
    <section className="container py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-5xl font-bold text-center mb-5 font-title">Our Happy Clients</h2>
        <p className="text-center mb-5 lg:mb-12 text-sm lg:text-lg text-para">We collaborate closely with a broad spectrum of clients from various industries and places.</p>

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
