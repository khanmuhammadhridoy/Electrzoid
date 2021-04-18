import React from "react";

const GetReviews = ({ review }) => {
  const { message, title } = review;
  const { displayName, img } = review.user;
  return (
    <div className="col-md-3">
      <div className="review">
        <img src={img} alt="" />
        <div className="text text-left">
          <h3>{title}</h3>
          <p style={{ color: "gray" }}>{message}</p>
          <h5> -{displayName}</h5>
        </div>
      </div>
    </div>
  );
};

export default GetReviews;
