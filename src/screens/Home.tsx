import React, { useEffect, useState } from "react";
import { button, Button, IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  motion,
  Variants,
  useAnimation,
  useAnimationControls,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  faGoogle,
  faTwitter,
  faInstagram,
  faLinkedin,
  faMedium,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import formalPic from "../assets/bg-hero.png";
import resume from "../assets/Resume.pdf";

function Home() {
  const [buttonSize, setButtonSize] = useState<"sm" | "lg">("lg"); //size of icon button social links
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [text] = useTypewriter({
    words: [
      "Developer",
      "Designer",
      "Debugger",
      "Innovator",
      "Collaborator",
      "Learner",
      "Solver",
      "Tester",
      "Gamer",
    ],
    loop: false,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const h1 = useAnimation();
  const h2 = useAnimation();
  const link = useAnimation();
  const heroBg = useAnimation();

  useEffect(() => {
    if (inView) {
      h1.start({
        x: 0,
        opacity: 1,
        transition: { type: "tween", bounce: 0.2, duration: 0.8 },
      });
      h2.start({
        x: 0,
        opacity: 1,
        transition: { type: "tween", bounce: 0.2, duration: 1 },
      });
      heroBg.start({
        x: 0,
        opacity: 1,
        transition: { type: "tween", bounce: 0.2, duration: 0.8 },
      });
      link.start((i) => ({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          delay: i * 0.05,
          bounce: 0.7,
          duration: 1.5,
        },
      }));
    }
  }, [inView]);

  const fromLeft: Variants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
  };
  const fromRight: Variants = {
    hidden: {
      x: 50,
      opacity: 0,
    },
  };
  const fromLeftLink: Variants = {
    hidden: {
      y: -30,
      opacity: 0,
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Adjust this breakpoint as needed
        setButtonSize("sm");
      } else {
        setButtonSize("lg");
      }
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex w-full h-full justify-center items-center ">
      <div
        ref={ref}
        className="flex flex-col-reverse lg:flex-row w-[100%] lg:max-w-[80%] "
      >
        <div className="z-10 flex flex-col gap-1 lg:gap-0 items-center lg:items-start text-center lg:text-start lg:w-[50%] font-['Poppins'] font-bold text-darkBlue ">
          <motion.div
            // animate={screenWidth >= 1024 ? h1 : ""}
            variants={fromLeft}
            initial="hidden"
            animate={screenWidth >= 1024 ? h1 : ""}
            className="flex flex-col lg:block justify-center gap-2 lg:gap-0"
          >
            <p className="home-text ">
              Hi There, <span className="home-text lg:hidden">I'm a </span>
            </p>
            <p className="home-text hidden lg:block">
              I'm a <span className="text-brightRed">{text}</span>{" "}
              <span>
                <Cursor cursorStyle="<" />
              </span>{" "}
            </p>
            <p className="home-text text-brightRed lg:hidden">
              {text}
              <span>
                <Cursor cursorStyle="<" />
              </span>{" "}
            </p>
          </motion.div>
          <motion.div
            // animate={screenWidth >= 1024 ? h2 : ""}
            variants={fromLeft}
            initial="hidden"
            animate={screenWidth >= 1024 ? h2 : ""}
            className=" w-3/4 lg:w-auto"
          >
            <p className="text-md lg:text-xl font-semibold mt-4">
              I'm <span className="text-brightRed">Kyle Mendoza</span>, a
              passionate and aspiring software developer based in Pasig. I have
              experience in building web and mobile applications using
              JavaScript, React, and other libraries and frameworks.
            </p>
            <div className="flex justify-center lg:justify-normal items-center mt-3 mb-6">
              <a
                href="#about"
                className="hidden lg:block transition-all delay-50 cursor-pointer border-2 border-black font-['poppins'] rounded-sm px-4 py-2 text-xs lg:text-xl font-bold text-brightRed hover:bg-brightRed hover:text-white hover:border-brightRed hover:drop-shadow-lg uppercase"
              >
                About Me
              </a>
              <a
                download="Mendoza, Kyle Dominic L. - Resume.pdf"
                href={resume}
                className="block lg:hidden transition-all delay-50 cursor-pointer border-2 border-black font-['poppins'] rounded-sm px-4 py-2 text-xs font-bold text-brightRed hover:bg-brightRed hover:text-white hover:border-brightRed hover:drop-shadow-lg uppercase"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <div className="flex gap-3 justify-center lg:justify-normal ">
            <motion.a
              custom={0}
              // animate={screenWidth >= 1024 ? link : ""}
              variants={fromLeftLink}
              initial="hidden"
              animate={screenWidth >= 1024 ? link : ""}
              href="https://www.facebook.com/shaclonely"
              className="drop-shadow-lg"
            >
              <IconButton
                className="rounded-full block hover:bg-[#1877F2] hover:scale-125 "
                size={buttonSize}
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="flex text-xl lg:text-2xl"
                />
              </IconButton>
            </motion.a>
            <motion.a
              custom={1}
              variants={fromLeftLink}
              initial="hidden"
              animate={screenWidth >= 1024 ? link : ""}
              href="https://twitter.com/kdmendoza00"
              className="drop-shadow-lg"
            >
              <IconButton
                className="rounded-full block hover:bg-[#1DA1F2] hover:scale-125"
                size={buttonSize}
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="flex text-xl lg:text-2xl"
                />
              </IconButton>
            </motion.a>
            <motion.a
              custom={2}
              variants={fromLeftLink}
              initial="hidden"
              animate={screenWidth >= 1024 ? link : ""}
              href="https://www.instagram.com/kyleemndz/"
              className="drop-shadow-lg"
            >
              <IconButton
                className="rounded-full block hover:bg-gradient-to-r from-[#F56040] via-[#E1306C] to-[#833AB4] hover:scale-125"
                size={buttonSize}
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="flex text-xl lg:text-2xl"
                />
              </IconButton>
            </motion.a>
            <motion.a
              custom={3}
              variants={fromLeftLink}
              initial="hidden"
              animate={screenWidth >= 1024 ? link : ""}
              href="https://www.linkedin.com/in/kyleemendoza"
              className="drop-shadow-lg"
            >
              <IconButton
                className="rounded-full block hover:bg-[#0077b5] hover:scale-125"
                size={buttonSize}
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="flex text-xl lg:text-2xl"
                />
              </IconButton>
            </motion.a>
            <motion.a
              custom={4}
              variants={fromLeftLink}
              initial="hidden"
              animate={screenWidth >= 1024 ? link : ""}
              href="https://github.com/KyleeMendoza"
              className="drop-shadow-lg"
            >
              <IconButton
                className="rounded-full block hover:scale-125"
                size={buttonSize}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="flex text-xl lg:text-2xl"
                />
              </IconButton>
            </motion.a>
            <motion.a
              custom={5}
              variants={fromLeftLink}
              initial="hidden"
              animate={screenWidth >= 1024 ? link : ""}
              href="https://medium.com/@kylemendoza67"
              className="drop-shadow-lg"
            >
              <IconButton
                className="rounded-full block hover:scale-125"
                size={buttonSize}
              >
                <FontAwesomeIcon
                  icon={faMedium}
                  className="flex text-xl lg:text-2xl"
                />
              </IconButton>
            </motion.a>
          </div>
        </div>
        <motion.div
          variants={fromRight}
          initial="hidden"
          animate={screenWidth >= 1024 ? heroBg : ""}
          className="hidden flex-1 lg:relative lg:flex items-center justify-center "
        >
          <div className="justify-center flex lg:absolute">
            <img
              src={formalPic}
              alt="Picture"
              className="max-w-[70%] right-0"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
