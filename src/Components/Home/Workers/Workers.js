import React, { useEffect, useState } from "react";
import Worker from "../Worker/Worker";
const Workers = () => {
  const [workers, setWorkers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/members")
      .then((res) => res.json())
      .then((data) => setWorkers(data));
  }, []);

  return (
    <section className="workers mt-5">
      <div className="container">
        <h2 className="text-center highlight  mb-5">Our Engineer</h2>
        <div className="row">
          {workers.map((worker) => (
            <Worker key={worker._id} worker={worker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workers;
