import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Header />

      <section id="home">
        <Home />
      </section>
      
    </div>
  );
}

export default App;
