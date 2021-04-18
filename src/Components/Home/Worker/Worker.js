import React from "react";

const Worker = ({ worker }) => {
  return (
    <div className="col-md-4 col-sm-6 text-center">
      <img
        alt=""
        style={{ height: "200px" }}
        src={`data:image/png;base64,${worker.image.img} alt="`}
      />

      <h4>{worker.name}</h4>
    </div>
  );
};

export default Worker;
