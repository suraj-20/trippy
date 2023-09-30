import React, { useEffect } from "react";
import "./Hero.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={props.cName}>
      <img src={props.heroImg} alt="HeroImage" />

      <div className="hero-content">
        <h1 data-aos="fade-up">{props.title}</h1>
        <p data-aos="fade-up">{props.text}</p>
        <a data-aos="fade-up" href={props.url} className={props.btnClass}>
          {props.btnText}
        </a>
      </div>
    </div>
  );
};

export default Hero;
