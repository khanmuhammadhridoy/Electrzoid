import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import ManageService from "../ManageService/ManageService";

const Dashboard = () => {
  return (
    <div>
      <Navigation></Navigation>
      <ManageService></ManageService>
    </div>
  );
};

export default Dashboard;
