import React from "react";
import "../../Components/Hero/Hero.css";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import image1 from "../../Assets/4.jpg";
import ContactForm from "../../Components/ContactUs/ContactForm";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  return (
    <div className="contactSection">
      <Navbar />
      <Hero cName="hero-mid" heroImg={image1} title="Contact" btnClass="hide" />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
