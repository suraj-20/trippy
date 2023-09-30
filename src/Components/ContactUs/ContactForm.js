import React, { useEffect } from "react";
import "./ContactFormStyle.css";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="form-container">
      <h1 data-aos="fade-up">Send Message to Us!</h1>

      <form data-aos="fade-up">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows={4}></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
