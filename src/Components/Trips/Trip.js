import React from "react";
import "./Trip.css";
import TripData from "./TripData";
import trip1 from "../../Assets/9.jpg";
import trip2 from "../../Assets/10.jpg";
import trip3 from "../../Assets/11.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Trip = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="trip">
      <h1 data-aos="fade-up">Recent Trips</h1>
      <p data-aos="fade-up">
        You can discover unique destinations using google maps.
      </p>

      <div data-aos="fade-up" className="trip-content">
        <TripData
          image={trip1}
          heading="Trip in Indonasia"
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pecific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
        />
        <TripData
          image={trip2}
          heading="Trip in Malesiya"
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pecific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
        />
        <TripData
          image={trip3}
          heading="Trip in France"
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pecific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
        />
      </div>
    </div>
  );
};

export default Trip;
