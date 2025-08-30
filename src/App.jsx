import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div>
      <Header />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="techstack">
        <TechStack/>
      </section>
      
    </div>
  );
}

export default App;
