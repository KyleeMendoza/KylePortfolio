import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { motion, useScroll, useSpring } from "framer-motion";
import { Button, IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faMouse,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import NavBar from "./components/NavBar";
import Particle from "./components/Particle";

import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
import GridLoader from "react-spinners/GridLoader";

function App() {
  const [loading, setLoading] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <GridLoader
            color="#ff013e"
            loading={loading}
            size={25}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="relative">
          <motion.div className="progress-bar" style={{ scaleX }} />
          <div className="flex flex-col h-screen" id="home">
            <header>
              <NavBar />
            </header>
            <body className="relative flex justify-center flex-1 items-center">
              <Home />
              <div className="hidden absolute lg:flex gap-1 right-20 bottom-10">
                <p className="text-xl font-bold font-['poppins']">
                  Scroll Down
                </p>
                <FontAwesomeIcon icon={faArrowDown} className="flex text-sm" />
              </div>
            </body>
          </div>
          <div className="lg:h-[60vh] h-[70vh]" id="about">
            <About />
          </div>
          <div className=" glass-bg pt-10 lg:py-20" id="projects">
            <Projects />
          </div>
          <div className="relative h-[40vh] " id="contact">
            <Contact />
            <div className="hidden lg:block absolute top-[60%] right-[48%] ">
              <IconButton
                className="p-4 rounded-full bg-black block border border-2 border-white"
                size="lg"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <FontAwesomeIcon icon={faArrowUp} className="flex text-lg" />
              </IconButton>
            </div>
          </div>
          <div className="w-full h-screen absolute top-0 left-0" id="particles">
            <Particle />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
