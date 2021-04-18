import React, { useEffect, useState } from "react";
import GetReviews from "../GetReviews/GetReviews";

const ShowReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container">
      <h2 className="text-center highlight  mb-5">Customer Satisfaction</h2>
      <div className="row">
        {reviews.map((review) => (
          <GetReviews key={review._id} review={review}></GetReviews>
        ))}
      </div>
    </div>
  );
};

export default ShowReviews;
