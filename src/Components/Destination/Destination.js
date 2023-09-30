import React, { useEffect } from "react";
import "./Destination.css";
import DestinationData from "./DestinationData";
import img1 from "../../Assets/5.jpg";
import img2 from "../../Assets/6.jpg";
import img3 from "../../Assets/7.jpg";
import img4 from "../../Assets/8.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Destination = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="destination">
      <h1 data-aos="fade-up">Popular Destinations</h1>
      <p data-aos="fade-up">
        Tours give you the opportunity to see a lot, within a time frame.
      </p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano is the second most active volcano found in the province
       of Batangas. A complex volcano in the middle of Taal Lake and is
       often called an island within a lake, that is an island within a
       lake that is on an island as well as one of the lowest volcano in
       the world having 311 meters elevation. It offers a very a
       spectacular view seen from Tagaytay Ridge. Taal volcano is located
       around 50 kilometers away from Manila, capital of the Philippines."
        img1={img1}
        img2={img2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt.Daguldul, Batangas"
        text="Mt. Daguldol is a coastal mountain located in the province of Batangas. It offers a scenic view of nearby Batangas mountains and beaches. Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet. Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan, Batangas. It is bound between the municipality of San Juan and Lobo. The Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain."
        img1={img3}
        img2={img4}
      />
    </div>
  );
};

export default Destination;
