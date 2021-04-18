import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="container">
      <div className="row text-md-start my-5 text-sm-center">
        <div className="col-md-3">
          <h5>ABOUT</h5>
          <ul className="list-unstyled">
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>INFORMATION</h5>
          <ul className="list-unstyled">
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>CUSTOMER SERVICE</h5>
          <ul className="list-unstyled">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright text-center">
        © Hridoy Khan 2021, all rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
