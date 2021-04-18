import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import Navigation from "../../Shared/Navigation/Navigation";
import DashboardNav from "../DashboardNav/DashboardNav";

const Reviews = () => {
  const [loggedInUser] = useContext(UserContext);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const eventData = {
      title: data.title,
      message: data.message,
      user: { ...loggedInUser },
    };
    const url = `https://electrzoid.herokuapp.com/addReviews`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side response", res));
    alert("Thank You for giving us such a wonderful review.");
    reset({});
  };
  return (
    <div>
      <Navigation></Navigation>
      <div className="row">
        <div className="col-md-3 adminNavPanel">
          <DashboardNav></DashboardNav>
        </div>

        <div className="col-md-4">
          <h1 className="text-center highlight">Give us a Review</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control"
              placeholder="Title"
              type="text"
              {...register("title", { required: true })}
            />
            <br />
            <textarea
              className="form-control"
              placeholder="Type Your Message"
              type="text"
              {...register("message", { required: true })}
            />
            <br />
            <input className="btn btn-primary" value="Review" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
