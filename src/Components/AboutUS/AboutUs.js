import React, { useEffect } from "react";
import "./AboutUsStyle.css";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="about-container">
      <h1 data-aos="fade-up">Our History</h1>
      <p data-aos="fade-up">
        Trippy is owned and managed by Trippy. In Pvt. Ltd., a leading brand in
        web designing services and e-commerce solutions. Trippy .In Pvt. Ltd. is
        counted for its expertise in web solutions and its top ranking business
        portals. Out invincible expertise and rich experience has raised our
        spirit to reach ahead from our client's expertation. Commendable success
        rate of other portals managed by Trippy is a live pradigm of our work
        excellence.{" "}
      </p>

      <h1 data-aos="fade-up" data-aos-duration="3000">
        Our Mission
      </h1>
      <p data-aos="fade-up">
        Our mission is to toucch the horizon where our cappabilities may
        surccessfully meet with the requirements of our clients, that too with
        ultimate transparecy and cost-effectivesness.{" "}
      </p>

      <h1 data-aos="fade-up" data-aos-duration="4000">
        Our Vision
      </h1>
      <p data-aos="fade-up">
        To sow the seeds of par-exvellence services with customer centric
        approach and reap the rust of worldwide clients.{" "}
      </p>
    </div>
  );
};

export default AboutUs;
