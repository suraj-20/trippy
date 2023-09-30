import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import image1 from "../../Assets/1.jpg";
import Destination from "../../Components/Destination/Destination";
import Trip from "../../Components/Trips/Trip";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <section className="homeSection">
      <Navbar />
      <Hero
        cName="hero"
        heroImg={image1}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        url="/"
        btnClass="show"
        btnText="Travel Plan"
      />
      <Destination />
      <Trip />
      <Footer />
    </section>
  );
};

export default Home;
