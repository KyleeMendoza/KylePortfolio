import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  motion,
  Variants,
  useAnimation,
  useAnimationControls,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import faTailwind from "../assets/tailwind-icon.png";

function About() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="flex h-full justify-center items-center border-2 border-blue-600"
    >
      <div className="w-[90%] lg:max-w-[60%] font-['Poppins'] text-darkBlue border-2 border-red-600">
        <motion.p
          className="text-md font-bold mb-3 text-brightRed"
          // animate={screenWidth >= 1024 ? h1 : ""}
          variants={fromLeft}
          initial="hidden"
          animate={screenWidth >= 1024 ? h1 : ""}
        >
          ABOUT ME
        </motion.p>
        <motion.div
          className="ml-2"
          // animate={screenWidth >= 1024 ? h2 : ""}
          variants={fromRight}
          initial="hidden"
          animate={screenWidth >= 1024 ? h2 : ""}
        >
          <p className="text-3xl font-bold mb-3 ">
            Aspiring Software Developer
          </p>
          <p className="text-sm mb-3 text-center lg:text-start">
            I am an aspiring software developer with a passion for creating
            innovative and user-friendly applications. With experience in web
            and mobile development, I am proficient in a variety of programming
            languages, frameworks, and SDLC. I am a quick learner and also a
            team player, always willing to to take on new challenges and help
            others. I also write tutorial blogs and always looking for new ways
            to learn and grow as a developer. I am confident that I have the
            skills and the drive to succeed in a career as a software developer.
          </p>
        </motion.div>
        <div className="flex flex-row-reverse">
          <div className="flex gap-3 ml-4 pl-4 border-l-4 border-brightRed ml-4">
            <motion.a
              custom={0}
              variants={fromLeftLink}
              initial="hidden"
              animate={screenWidth >= 1024 ? link : ""}
              className="drop-shadow-lg"
              title="HTML"
            >
              <div className="rounded-full block bg-black p-2 ">
                <FontAwesomeIcon
                  icon={faHtml5}
                  className="flex text-lg text-white"
                />
              </div>
            </motion.a>
            <motion.a
              custom={1}
              variants={fromLeftLink}
              initial="hidden"
              animate={screenWidth >= 1024 ? link : ""}
              className="drop-shadow-lg "
              title="CSS"
            >
              <div className="rounded-full block bg-black p-2 ">
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  className="flex text-lg text-white"
                />
              </div>
            </motion.a>
            <motion.a
              custom={2}
              variants={fromLeftLink}
              initial="hidden"
              animate={screenWidth >= 1024 ? link : ""}
              className="drop-shadow-lg"
              title="JavaScript"
            >
              <div className="rounded-full block bg-black p-2 ">
                <FontAwesomeIcon
                  icon={faJs}
                  className="flex text-lg text-white"
                />
              </div>
            </motion.a>
            <motion.a
              custom={3}
              variants={fromLeftLink}
              initial="hidden"
              animate={screenWidth >= 1024 ? link : ""}
              className="drop-shadow-lg"
              title="ReactJs"
            >
              <div className="rounded-full block bg-black p-2 ">
                <FontAwesomeIcon
                  icon={faReact}
                  className="flex text-lg text-white"
                />
              </div>
            </motion.a>
            <motion.a
              custom={3}
              variants={fromLeftLink}
              initial="hidden"
              animate={screenWidth >= 1024 ? link : ""}
              className="drop-shadow-lg"
              title="Tailwind CSS"
            >
              <div className="rounded-full block bg-black p-2 w-8">
                <img src={faTailwind} alt="Tailwind CSS" />
              </div>
            </motion.a>
          </div>
          <motion.div
            className="flex items-center"
            variants={fromLeft}
            initial="hidden"
            animate={screenWidth >= 1024 ? h1 : ""}
          >
            <p className="font-bold text-sm">Tech Stack</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
