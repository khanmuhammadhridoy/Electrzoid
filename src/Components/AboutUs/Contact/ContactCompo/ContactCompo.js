import React from "react";
import { useForm } from "react-hook-form";
import "./ContactCompo.css";
const ContactCompo = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    const url = `https://electrzoid.herokuapp.com/messages`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side response", res));
    alert("Thank You. We will contact you soon.");
    reset({});
  };
  return (
    <div>
      <div className="contact">
        <div className="contactText">
          <h1 className="text-center highlight">Contact Us</h1>
          <p>
            Our electrical repair and service options are proudly offered to
            <br />
            clients. Give us a call today to schedule a free service estimate!
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control"
              placeholder="Name"
              type="text"
              {...register("name", { required: true })}
            />
            <br />
            <input
              className="form-control"
              placeholder="Email"
              type="email"
              {...register("email", { required: true })}
            />
            <br />
            <textarea
              className="form-control"
              placeholder="Type Your Message"
              type="text"
              {...register("message", { required: true })}
            />
            <br />
            <input className="btn btn-primary" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactCompo;
