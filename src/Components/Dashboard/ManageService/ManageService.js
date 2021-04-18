import React from "react";
import DashboardNav from "../DashboardNav/DashboardNav";
import PlaceOrder from "../PlaceOrder/PlaceOrder";

const ManageService = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3 adminNavPanel">
          <DashboardNav></DashboardNav>
        </div>
        <div className="col-md-9">
          <PlaceOrder></PlaceOrder>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
