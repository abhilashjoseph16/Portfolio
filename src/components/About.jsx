import React from "react";
import aboutImage from "../assets/developer-image.jpg";

function About() {
  return (
    <div className="portfolio-about-main-container">
      <div className="about-icon-container">
        <div className="about-image_box">
          <img src={aboutImage} alt="Full Stack Developer" />
        </div>
      </div>
      <div className="about-content-container">
        <h1>About Me</h1>
        <span className="about-heading-underline"></span>
        <div className="about-section-description_box">
          <p>
            I’m a Full Stack Developer with 3 years of hands-on experience in
            designing and building scalable, high-performance web applications.
            While my core strength lies in frontend development, where I craft
            clean, responsive, and intuitive user interfaces, I also have solid
            experience in backend engineering, creating robust APIs, managing
            databases, and ensuring seamless integration between systems.
          </p>
          <p>
            What excites me most is the challenge of transforming complex
            problems into simple, elegant solutions. I enjoy collaborating with
            teams, bringing ideas to life, and delivering products that not only
            function well but also provide an exceptional user experience.
          </p>
          <p>
            I’m constantly exploring new technologies, frameworks, and best
            practices to stay ahead in the fast-evolving tech world. With a
            strong foundation in both client and server-side development, I’m
            passionate about building end-to-end digital experiences that are
            reliable, scalable, and delightful to use.
          </p>
        </div>
        <div className="about-section-overview_box">
          <div className="overview-box-experience_container">
            <span>3+</span>
            <p>Years Experience</p>
          </div>
          <div className="overview-box-project_container">
            <span>10+</span>
            <p>Projects Completed</p>
          </div>
        </div>
        <div className="about-section-resume-button_container">
          <button>Download Resume</button>
        </div>
      </div>
    </div>
  );
}

export default About;
