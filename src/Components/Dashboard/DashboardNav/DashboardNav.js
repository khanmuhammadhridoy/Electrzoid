import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./DashboardNav.css";

const DashboardNav = () => {
  const [loggedInUser] = useContext(UserContext);
  const [isMembers, setIsMembers] = useState(false);
  useEffect(() => {
    fetch("https://electrzoid.herokuapp.com/ismember", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsMembers(data));
  }, []);

  return (
    <div className="dashNav">
      <nav>
        <Link to="/dashboard">Place Order</Link>
        <Link to="/review">Review</Link>
        {isMembers && (
          <div>
            <Link to="/addMember">Add Member</Link>
            <Link to="/addService">Add Service</Link>
            <Link to="/manageWeb">Manage Service</Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default DashboardNav;
