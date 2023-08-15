import React, { useEffect } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation, useAnimationControls } from "framer-motion";
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

function Home() {
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
        transition: { type: "tween", bounce: 0.2, duration: 0.5 },
      });
      h2.start({
        x: 0,
        opacity: 1,
        transition: { type: "tween", bounce: 0.2, duration: 0.7 },
      });
      heroBg.start({
        x: 0,
        opacity: 1,
        transition: { type: "tween", bounce: 0.2, duration: 0.5 },
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

    if (!inView) {
      h1.start({
        x: -100,
        opacity: 0,
      });
      h2.start({
        x: -100,
        opacity: 0,
      });
      heroBg.start({
        x: 200,
        opacity: 0,
      });
      link.start({
        y: -30,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <div className="flex w-full justify-center items-center">
      <div ref={ref} className="flex w-[75%] border border-2 border-red-600">
        <div className="w-[53%] font-['Poppins'] font-bold text-darkBlue ">
          <motion.div animate={h1}>
            <p className="home-text ">Hi There,</p>
            <p className="home-text ">
              I'm a <span className="text-brightRed">{text}</span>{" "}
              <span>
                <Cursor cursorStyle="<" />
              </span>{" "}
            </p>
          </motion.div>
          <motion.div animate={h2}>
            <p className="text-md font-semibold mt-4">
              I'm <span className="text-brightRed">Kyle Mendoza</span>, an
              aspiring Software Developer based in Pasig, Philippines
            </p>
            <Button className="bg-brightRed my-4 drop-shadow-lg">
              Download CV
            </Button>
          </motion.div>
          <div className="flex gap-3">
            <motion.a
              custom={0}
              animate={link}
              href="https://www.facebook.com/shaclonely"
              className="drop-shadow-lg"
            >
              <IconButton
                className="rounded-full block hover:bg-[#1877F2] hover:scale-125 "
                size="lg"
              >
                <FontAwesomeIcon icon={faFacebook} className="flex text-lg" />
              </IconButton>
            </motion.a>
            <motion.a
              custom={1}
              animate={link}
              href="https://twitter.com/kdmendoza00"
              className="drop-shadow-lg"
            >
              <IconButton
                className="rounded-full block hover:bg-[#1DA1F2] hover:scale-125"
                size="lg"
              >
                <FontAwesomeIcon icon={faTwitter} className="flex text-lg" />
              </IconButton>
            </motion.a>
            <motion.a
              custom={2}
              animate={link}
              href="https://www.instagram.com/kyleemndz/"
              className="drop-shadow-lg"
            >
              <IconButton
                className="rounded-full block hover:bg-gradient-to-r from-[#F56040] via-[#E1306C] to-[#833AB4] hover:scale-125"
                size="lg"
              >
                <FontAwesomeIcon icon={faInstagram} className="flex text-lg" />
              </IconButton>
            </motion.a>
            <motion.a
              custom={3}
              animate={link}
              href="https://www.linkedin.com/in/kyleemendoza"
              className="drop-shadow-lg"
            >
              <IconButton
                className="rounded-full block hover:bg-[#0077b5] hover:scale-125"
                size="lg"
              >
                <FontAwesomeIcon icon={faLinkedin} className="flex text-lg" />
              </IconButton>
            </motion.a>
            <motion.a
              custom={4}
              animate={link}
              href="https://github.com/KyleeMendoza"
              className="drop-shadow-lg"
            >
              <IconButton
                className="rounded-full block hover:scale-125"
                size="lg"
              >
                <FontAwesomeIcon icon={faGithub} className="flex text-lg" />
              </IconButton>
            </motion.a>
            <motion.a
              custom={5}
              animate={link}
              href="https://medium.com/@kylemendoza67"
              className="drop-shadow-lg"
            >
              <IconButton
                className="rounded-full block hover:scale-125"
                size="lg"
              >
                <FontAwesomeIcon icon={faMedium} className="flex text-lg" />
              </IconButton>
            </motion.a>
          </div>
        </div>
        <motion.div
          animate={heroBg}
          className="flex-1 relative flex items-center justify-center "
        >
          <div className="justify-center flex absolute ">
            <img src={formalPic} alt="Picture" className="hero-bg right-0" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
