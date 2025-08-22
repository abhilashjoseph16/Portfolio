import React from "react";

function Home() {
  return (
    <div className="portfolio-home-main-container">
      <div className="porfolio-home-box">
        <div className="home_box-text-container">
          <h1>
            <span className="intro-text">Hi, I'm</span>
            <span className="name-text">Abhilash Joseph</span>
          </h1>
          <p className="role-text">Full Stack Developer</p>
          <p className="desciption-text">
            I craft beautiful, functional digital experiences that bridge the
            gap between design and technology.
          </p>
        </div>
        <div className="home_box-button-container">
          <button
            onClick={() => {
              document.getElementById("projects").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
