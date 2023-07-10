import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Inspiration from "./components/inspiration";


export default function App() {
  return (
    <main className="text-white bg-black body-font">
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Inspiration />
    </main>
  );
}