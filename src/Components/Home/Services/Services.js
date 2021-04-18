import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Workers = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://electrzoid.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="service mt-5">
      <div className="container">
        <h2 className="text-center highlight  mb-5">Services</h2>
        <div className="row">
          {services.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workers;
