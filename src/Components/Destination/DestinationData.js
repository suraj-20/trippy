import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const DestinationData = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-right" className={props.className}>
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>

      <div className="image">
        <img alt="mountain1" src={props.img1} />
        <img alt="mountain2" src={props.img2} />
      </div>
    </div>
  );
};

export default DestinationData;
