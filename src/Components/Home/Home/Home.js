import React from "react";
import AboutCompo from "../../AboutUs/AboutCompo/AboutCompo";
import ContactCompo from "../../AboutUs/Contact/ContactCompo/ContactCompo";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Header from "../Header/Header";
import Services from "../Services/Services";
import ShowReviews from "../ShowReviews/ShowReviews";
import Workers from "../Workers/Workers";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <Navigation></Navigation>
        <Header></Header>
        <Services></Services>
        <ContactCompo></ContactCompo>
        <ShowReviews></ShowReviews>
        <Workers></Workers>
        <AboutCompo></AboutCompo>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
