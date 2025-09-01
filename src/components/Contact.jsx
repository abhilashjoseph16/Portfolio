import React, { useState } from "react";
import emailImage from "../assets/icons/email.png";
import phoneImage from "../assets/icons/phone.png";
import locationImage from "../assets/icons/location.png";
import githubImage from "../assets/icons/github.png";
import linkedinImage from "../assets/icons/linkedin.png";
import messageIcon from "../assets/icons/message.png";
import Alert from "./Alert";
import { API_URL } from "../util/config";

function Contact() {
  const [alert, setAlert] = useState({ message: "", type: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      setAlert({ message: "Message sent successfully!", type: "success" });
      e.target.reset();
    } catch (error) {
      setAlert({ message: "Failed to send message.", type: "error" });
    } finally {
      setTimeout(() => setAlert({ message: "", type: "" }), 4000);
    }
  };

  return (
    <div className="portfolio-contact-main-container">
      <Alert
        message={alert.message}
        type={alert.type}
        onClose={() => setAlert({ message: "", type: "" })}
      />
      <div className="portfolio-contact-title-container">
        <h1>Get in Touch</h1>
        <div className="contact-title-underline"></div>
        <p>Let's discuss your next project or collaboration opportunity</p>
      </div>
      <div className="portfolio-contact-content-box">
        <div className="contact-details-box">
          <div className="contact-details-title">
            <h1>Let's Connect</h1>
          </div>
          <div className="contact-details-content">
            <div>
              <img src={emailImage} alt="email" />
              <span>
                <h2>Email</h2>
                <p>abhilash.pannikottil@gmail.com</p>
              </span>
            </div>
            <div>
              <img src={phoneImage} alt="phone" />
              <span>
                <h2>Phone</h2>
                <p>6238835664</p>
              </span>
            </div>
            <div>
              <img src={locationImage} alt="location" />
              <span>
                <h2>Location</h2>
                <p>6238835664</p>
              </span>
            </div>
          </div>
          <div className="contact-social-media">
            <div className="contact-social-media-title">
              <h2>Follow Me</h2>
            </div>
            <div className="contact-social-media-icon_box">
              <div
                className="social-media-icon"
                onClick={() =>
                  window.open("https://github.com/abhilashjoseph16", "_blank")
                }
              >
                <img src={githubImage} alt="github" />
              </div>
              <div
                className="social-media-icon"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/abhilashjosephofficial/",
                    "_blank"
                  )
                }
              >
                <img src={linkedinImage} alt="linkedin" />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-message-box">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="youremail@example.com"
                  required
                />
              </div>
            </div>
            <div className="form-group-subject">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project inquiry"
                required
              />
            </div>
            <div className="form-group-message">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <div className="contact-form-button_box">
              <button type="submit">
                <img src={messageIcon} alt="" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
