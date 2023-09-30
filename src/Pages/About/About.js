import React from "react";
import "../../Components/Hero/Hero.css";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import image1 from "../../Assets/2.jpg";
import AboutUs from "../../Components/AboutUS/AboutUs";
import Footer from "../../Components/Footer/Footer";

const About = () => {
  return (
    <div className="aboutSection">
      <Navbar />
      <Hero cName="hero-mid" heroImg={image1} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
