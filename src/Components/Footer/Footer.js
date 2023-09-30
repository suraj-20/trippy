import React, { useEffect } from "react";
import "./FooterStyle.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="footer">
      <div className="top">
        <div data-aos="fade-up" className="top-heading">
          <h1>Trippy</h1>
          <p>Choose your Favourite Destination.</p>
        </div>
        <div data-aos="fade-up" className="social-icons">
          <a href="/">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-square-instagram"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-square-behance"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-square-twitter"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="footer-link"
        >
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">Licence</a>
          <a href="/">All Versions</a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="4000"
          className="footer-link"
        >
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="5000"
          className="footer-link"
        >
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">TroubleShooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="6000"
          className="footer-link"
        >
          <h4>Others</h4>
          <a href="/">Terms of Services</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Licence</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
