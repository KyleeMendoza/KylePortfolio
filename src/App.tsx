import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { motion, useScroll, useSpring } from "framer-motion";

import NavBar from "./components/NavBar";
import Particle from "./components/Particle";

import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative ">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="flex flex-col h-screen" id="home">
        <header>
          <NavBar />
        </header>
        <body className="flex justify-center flex-1 items-center ">
          <Home />
        </body>
      </div>
      <div className="h-[50vh]" id="about">
        <About />
      </div>
      <div className=" glass-bg py-20" id="projects">
        <Projects />
      </div>
      <div className="h-[40vh]" id="contact">
        <Contact />
      </div>
      <div className="w-full h-screen absolute top-0 left-0" id="particles">
        <Particle />
      </div>
    </div>
  );
}

export default App;
