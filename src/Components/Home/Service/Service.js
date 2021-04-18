import React, { useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../../App";

const Service = ({ service }) => {
  const history = useHistory();
  const [loggedInUser] = useContext(UserContext);
  const handleService = () => {
    const newOrders = { ...loggedInUser, ...service };
    fetch("https://electrzoid.herokuapp.com/addOrders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrders),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    history.push(`/dashboard`);
  };
  return (
    <div
      onClick={() => handleService(service._id)}
      className="col-md-4 col-sm-6 text-center"
    >
      <img
        alt=""
        style={{ height: "200px" }}
        src={`data:image/png;base64,${service.image.img} `}
      />
      <p>Price: $ {service.price}</p>
      <h4>{service.name}</h4>
    </div>
  );
};

export default Service;
