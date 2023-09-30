import React from "react";
import "./Trip.css";

const TripData = (props) => {
  return (
    <div className="t-card">
      <div className="t-image">
        <img alt="trip" src={props.image} />
      </div>
      <div className="t-card-info">
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default TripData;
