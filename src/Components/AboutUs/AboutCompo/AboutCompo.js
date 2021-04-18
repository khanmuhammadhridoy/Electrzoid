import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import bigImage from "../../../images/about1.jpg";
import smallImage from "../../../images/about2.jpg";
import "./Aboutcompo.css";
const AboutCompo = () => {
  return (
    <section>
      <div className="d-flex justify-content-center align-items-center">
        <div className="about container container-lg-fluid row">
          <div className="images col-md-8">
            <div className="bigImage">
              <img src={bigImage} alt="" />
            </div>
            <div className="smallImage">
              <img src={smallImage} alt="" />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="aboutText">
              <p className="highlight">About Us</p>
              <h1 className="aboutHeading">
                Outstanding Residential & Commercial Services
              </h1>
              <p className="text-secondary">
                All of our services are backed by our 100% satisfaction
                guarantee. Our electricians can install anything from new
                security lighting for your outdoors to a whole home generator
                that will keep your appliances working during a power outage.
              </p>
              <ul>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </span>
                  Full-service electrical layout, design
                </li>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </span>
                  Wiring and installation/upgrades
                </li>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </span>
                  Emergency power solutions (generators)
                </li>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </span>
                  Virtually any electrical needs you have – just ask!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompo;
