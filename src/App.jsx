import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";

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
      
    </div>
  );
}

export default App;
