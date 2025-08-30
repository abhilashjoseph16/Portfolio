import React from "react";
import technologies from "../data/technologies.json";

function TechStack() {
  return (
    <div className="portfolio-techstack-main-container">
      <div className="techstack-title-container">
        <h1>Tech Stack</h1>
        <div className="techstack-underline"></div>
        <p>Technologies and tools I use to build amazing digital experiences</p>
      </div>
      <div className="techstack-icon-grid-container">
        {technologies.map((technology, index) => (
          <div key={index} className="techstack-box">
            <img src={technology.image} alt={technology.title} />
            <span>{technology.title}</span>
          </div>
        ))}
      </div>
      <div className="techstack-skill-container">
        <div className="techstack-skill_box">
            <img/>
            <h2>Frontend</h2>
            <p>React,HTML,CSS,JavaScript,Next.js,TailwindCSS,Sass</p>
        </div>
        <div className="techstack-skill_box">
            <img/>
            <h2>Frontend</h2>
            <p>React,HTML,CSS,JavaScript,Next.js,TailwindCSS,Sass</p>
        </div>
        <div className="techstack-skill_box">
            <img/>
            <h2>Frontend</h2>
            <p>React,HTML,CSS,JavaScript,Next.js,TailwindCSS,Sass</p>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
