import React, { useEffect, useState } from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import DashboardNav from "../DashboardNav/DashboardNav";

const ManageWeb = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  const handleServiceDelete = (id) => {
    fetch(`http://localhost:5000/serviceDelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/members")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  const handleMemberDelete = (id) => {
    fetch(`http://localhost:5000/memberDelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <Navigation></Navigation>
      <div className="row">
        <div className="col-md-3 adminNavPanel">
          <DashboardNav></DashboardNav>
        </div>
        <div className="col-md-9">
          <table className="table table-warning table-striped">
            <tr>
              <th>Service Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
            {service.map((service) => (
              <tr key={service._id}>
                <td>{service.name}</td>
                <td>{service.price}</td>
                <td>
                  <button
                    onClick={() => handleServiceDelete(service._id)}
                    className="btn btn-danger"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-file-x-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.854 6.146 8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 1 1 .708-.708z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </table>
          <table className="table table-warning table-striped">
            <tr>
              <th>Member Name</th>
              <th>Action</th>
            </tr>
            {members.map((member) => (
              <tr key={member._id}>
                <td>{member.name}</td>
                <td>
                  <button
                    onClick={() => handleMemberDelete(member._id)}
                    className="btn btn-danger"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-file-x-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.854 6.146 8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 1 1 .708-.708z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageWeb;
