import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="techstack">
        <TechStack />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
