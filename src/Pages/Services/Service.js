import React from "react";
import "../../Components/Hero/Hero.css";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import image1 from "../../Assets/3.jpg";
import Trip from "../../Components/Trips/Trip";
import Footer from "../../Components/Footer/Footer";

const Service = () => {
  return (
    <div className="serviceSection">
      <Navbar />
      <Hero cName="hero-mid" heroImg={image1} title="Service" btnClass="hide" />
      <Trip />
      <Footer />
    </div>
  );
};

export default Service;
