import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { motion, useScroll, useSpring } from "framer-motion";

import NavBar from "./screens/NavBar";
import Home from "./screens/Home";
import Particle from "./components/Particle";

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
      <div className="flex flex-col h-screen">
        <header>
          <NavBar />
        </header>
        <body className="flex justify-center flex-1 items-center ">
          <Home />
        </body>
      </div>
      <div className="h-screen">
        <h1>About</h1>
      </div>
      <div className="h-screen">
        <h1>Skills</h1>
      </div>
      <div className="h-screen">
        <h1>Project</h1>
      </div>
      <div className="h-screen">
        <h1>Contact</h1>
      </div>
      <div className="w-full h-screen absolute top-0 left-0" id="particles">
        <Particle />
      </div>
    </div>
  );
}

export default App;
