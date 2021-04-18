import React, { useState } from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import DashboardNav from "../DashboardNav/DashboardNav";

const AddServices = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    console.log(info);
    formData.append("name", info.name);
    formData.append("price", info.price);
    formData.append("file", file);

    fetch("https://electrzoid.herokuapp.com/addService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section>
      <Navigation></Navigation>
      <div className="row">
        <div className="col-md-3 adminNavPanel">
          <DashboardNav></DashboardNav>
        </div>

        <div className="col-md-4">
          <div className="container-fluid row">
            <div
              className="col-md-10 p-4 pr-5"
              style={{
                position: "absolute",
                right: 0,
              }}
            >
              <h2 className="text-center  highlight">Add a Service</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    required
                    onBlur={handleBlur}
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input
                    required
                    onBlur={handleBlur}
                    type="text"
                    className="form-control"
                    name="price"
                    placeholder="$ 0.00"
                  />
                </div>
                <div className="form-group">
                  <label>Upload a image</label>
                  <input
                    required
                    onChange={handleFileChange}
                    type="file"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Picture"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Service
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddServices;
