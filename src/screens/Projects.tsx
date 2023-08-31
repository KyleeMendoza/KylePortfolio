import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  motion,
  Variants,
  useAnimation,
  useAnimationControls,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import groceryBg from "../assets/grocery-bg.png";
import ecommerce from "../assets/ecommerce.png";
import mathAppBg from "../assets/mathApp.png";
import taguroAppBg from "../assets/taguroApp.png";

function Projects() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const { ref: refBody, inView: inViewBody } = useInView({
    threshold: 0.2,
  });
  const { ref: refCard1, inView: inViewCard1 } = useInView({
    threshold: 0.5,
  });
  const { ref: refCard2, inView: inViewCard2 } = useInView({
    threshold: 0.5,
  });
  const { ref: refCard3, inView: inViewCard3 } = useInView({
    threshold: 0.5,
  });

  const h1 = useAnimation();
  const h2 = useAnimation();
  const title1 = useAnimation();
  const title2 = useAnimation();
  const title3 = useAnimation();
  const card1 = useAnimation();
  const card2 = useAnimation();
  const card3 = useAnimation();

  useEffect(() => {
    if (inViewBody) {
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
    }
  }, [inViewBody]);

  useEffect(() => {
    if (inViewCard1) {
      card1.start({
        x: 0,
        opacity: 1,
        transition: { type: "tween", bounce: 0.2, duration: 0.5 },
      });
      title1.start({
        x: 0,
        opacity: 1,
        transition: { type: "tween", bounce: 0.2, duration: 0.5 },
      });
    }
  }, [inViewCard1]);

  useEffect(() => {
    if (inViewCard2) {
      card2.start({
        x: 0,
        opacity: 1,
        transition: { type: "tween", bounce: 0.2, duration: 0.5 },
      });
      title2.start({
        x: 0,
        opacity: 1,
        transition: { type: "tween", bounce: 0.2, duration: 0.5 },
      });
    }
  }, [inViewCard2]);

  useEffect(() => {
    if (inViewCard3) {
      card3.start({
        x: 0,
        opacity: 1,
        transition: { type: "tween", bounce: 0.2, duration: 0.5 },
      });
      title3.start({
        x: 0,
        opacity: 1,
        transition: { type: "tween", bounce: 0.2, duration: 0.5 },
      });
    }
  }, [inViewCard3]);

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
      ref={refBody}
      className="flex justify-center items-center border-2 border-red-600"
    >
      <div className="w-[90%] lg:max-w-[80%] font-['Poppins'] text-darkBlue border-2 border-blue-600">
        <motion.p
          className="text-md font-bold mb-3 text-brightRed"
          variants={fromLeft}
          initial="hidden"
          animate={screenWidth >= 1024 ? h1 : ""}
        >
          PROJECTS
        </motion.p>

        <div className="lg:ml-2 ">
          <motion.p
            className="text-3xl font-bold "
            variants={fromRight}
            initial="hidden"
            animate={screenWidth >= 1024 ? h2 : ""}
          >
            Each Project has a unique piece of development
          </motion.p>

          <div
            className="flex flex-col gap-4 lg:flex-row py-20 px-16 rounded-lg my-10 shadow-middle groceryBg "
            ref={refCard1}
          >
            <div className="hidden lg:block relative flex-1 rounded-lg">
              <motion.img
                src={ecommerce}
                alt=""
                className="absolute w-[95%] rounded-lg "
                variants={fromLeft}
                initial="hidden"
                animate={screenWidth >= 1024 ? card1 : ""}
              />
            </div>
            <div className="flex-1 ">
              <motion.p
                className="text-center font-bold text-2xl text-white "
                variants={fromRight}
                initial="hidden"
                animate={screenWidth >= 1024 ? title1 : ""}
              >
                E-commerce website
              </motion.p>
              <motion.p
                className="my-3 text-sm text-white text-center lg:text-start"
                variants={fromRight}
                initial="hidden"
                animate={screenWidth >= 1024 ? title1 : ""}
              >
                E-commerce website with an admin interface using HTML, CSS,
                JavaScript, and PHP. The website allows users to browse and
                purchase products, and it also includes an admin interface for
                managing the products, orders, and other aspects of the website.
              </motion.p>
              <div className="mt-6 flex gap-4 justify-center items-center ">
                <div className="shadow-offset border border-1 border-white px-4 py-1 rounded-md text-sm text-white">
                  HTML
                </div>
                <div className="shadow-offset border border-1 border-white px-4 py-1 rounded-md text-sm text-white">
                  CSS
                </div>
                <div className="shadow-offset border border-1 border-white px-4 py-1 rounded-md text-sm text-white">
                  JavaScript
                </div>
              </div>
              <div className="flex items-center justify-center font-bold gap-1 mt-5 text-sm text-white">
                <a href="https://github.com/KyleeMendoza/E-commerce-Website-with-Admin-and-Database">
                  Preview
                </a>
                <FontAwesomeIcon icon={faGithub} className="flex text-lg" />
              </div>
            </div>
          </div>
          <div
            className="flex flex-col lg:flex-row py-20 px-16 rounded-lg my-10 shadow-middle OnlineClassBg"
            ref={refCard2}
          >
            <div className="hidden lg:block  relative flex-1 rounded-lg ">
              <motion.img
                src={taguroAppBg}
                alt=""
                className="absolute top-0 "
                variants={fromLeft}
                initial="hidden"
                animate={screenWidth >= 1024 ? card2 : ""}
              />
            </div>
            <div className="flex-1 ">
              <motion.p
                className="text-center font-bold text-2xl text-white "
                variants={fromRight}
                initial="hidden"
                animate={screenWidth >= 1024 ? title2 : ""}
              >
                Tutor Finding App
              </motion.p>
              <motion.p
                className="my-3 text-sm text-white text-center lg:text-start"
                variants={fromRight}
                initial="hidden"
                animate={screenWidth >= 1024 ? title2 : ""}
              >
                Mobile application using React Native and Firebase. It is a
                tutor finding app that allows users to find tutors, message
                them, schedule video calls, and book appointments. The app also
                includes a machine learning face verification system to ensure
                that users and tutors are who they say they are.
              </motion.p>
              <div className="mt-6 flex gap-4 justify-center items-center ">
                <div className="shadow-offset border border-1 border-white px-4 py-1 rounded-md text-sm text-white">
                  React Native
                </div>
                <div className="shadow-offset border border-1 border-white px-4 py-1 rounded-md text-sm text-white">
                  Firebase
                </div>
                <div className="shadow-offset border border-1 border-white px-4 py-1 rounded-md text-sm text-white">
                  Tailwind
                </div>
              </div>
              <div className="flex items-center justify-center font-bold gap-1 mt-5 text-sm text-white">
                <a href="https://github.com/KyleeMendoza/firebaseWebrtc">
                  Preview
                </a>
                <FontAwesomeIcon icon={faGithub} className="flex text-lg" />
              </div>
            </div>
          </div>
          <div
            className="flex flex-col lg:flex-row py-20 px-16 rounded-lg my-10 shadow-middle mathBg"
            ref={refCard3}
          >
            <div className="hidden lg:block relative flex-1 rounded-lg">
              <motion.img
                src={mathAppBg}
                alt=""
                className="absolute w-[85%] left-5 -top-[10%]"
                variants={fromLeft}
                initial="hidden"
                animate={screenWidth >= 1024 ? card3 : ""}
              />
            </div>
            <div className="flex-1 ">
              <motion.p
                className="text-center font-bold text-2xl text-white "
                variants={fromRight}
                initial="hidden"
                animate={screenWidth >= 1024 ? title3 : ""}
              >
                Math Quiz Mobile App
              </motion.p>
              <motion.p
                className="my-3 text-sm text-white text-center lg:text-start"
                variants={fromRight}
                initial="hidden"
                animate={screenWidth >= 1024 ? title3 : ""}
              >
                Mobile game using Android Studio and SQL. It is a math quiz game
                that helps elementary students in their math skills by providing
                different levels and user rankings. The game is designed to be
                fun and engaging, while also challenging students to learn and
                improve their math skills.
              </motion.p>
              <div className="mt-6 flex gap-4 justify-center items-center ">
                <div className="shadow-offset border border-1 border-white px-4 py-1 rounded-md text-sm text-white">
                  Android Studio
                </div>
                <div className="shadow-offset border border-1 border-white px-4 py-1 rounded-md text-sm text-white">
                  SQL
                </div>
              </div>
              <div className="flex items-center justify-center font-bold gap-1 mt-5 text-sm text-white">
                <a href="https://github.com/KyleeMendoza/MATHMAGICIANS---Mobile-App">
                  Preview
                </a>
                <FontAwesomeIcon icon={faGithub} className="flex text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
