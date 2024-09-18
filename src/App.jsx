import React from "react";
import { About, Contact, Footer, Hero, Navbar,Projects } from "./components/index";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <h1 className="text-2xl text-white">
        <Navbar />
        <Hero />
        <About />
        <Projects/>
        <Contact/>
        <Footer/>
      </h1>
    </main>
  );
};

export default App;
