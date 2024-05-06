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
import foodBud from "../assets/foodBud.png";
import profiling from "../assets/profiling.png";
import dental from "../assets/dental.png";
import ppdms from "../assets/ppdms.png";
import budgeting from "../assets/budgeting.png";
import mathAppBg from "../assets/mathApp.png";
import taguroAppBg from "../assets/taguroApp.png";

function Projects() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const data = [
    {
      image: ecommerce,
      title: "E-commerce website",
      description: `
      E-commerce website with an admin interface using HTML, CSS,
      JavaScript, and PHP. The website allows users to browse and
      purchase products, and it also includes an admin interface for
      managing the products, orders, and other aspects of the website.
    `,
      stack: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/KyleeMendoza/E-commerce-Website-with-Admin-and-Database",
    },
    {
      image: taguroAppBg,
      title: "Tutor Finding App",
      description: `
      Mobile application using React Native and Firebase. It is a
                tutor finding app that allows users to find tutors, message
                them, schedule video calls, and book appointments. The app also
                includes a machine learning face verification system to ensure
                that users and tutors are who they say they are.
    `,
      stack: ["React Native", "Firebase", "Tailwind"],
      link: "https://github.com/KyleeMendoza/firebaseWebrtc",
    },
    {
      image: foodBud,
      title: "FoodBud - Food Catering Website",
      description: `
      Mobile application using React Native and Firebase. It is a
      tutor finding app that allows users to find tutors, message
      them, schedule video calls, and book appointments. The app also
      includes a machine learning face verification system to ensure
      that users and tutors are who they say they are.
    `,
      stack: ["React", "Tailwind", "Sql", "AWS"],
      link: "",
    },
    {
      image: profiling,
      title: "Profile Repository Website",
      description: `
      Mobile application using React Native and Firebase. It is a
      tutor finding app that allows users to find tutors, message
      them, schedule video calls, and book appointments. The app also
      includes a machine learning face verification system to ensure
      that users and tutors are who they say they are.
    `,
      stack: ["React", "Tailwind", "Sql", "AWS"],
      link: "https://github.com/KyleeMendoza/firebaseWebrtc",
    },
    {
      image: dental,
      title: "Dental Appointment Website",
      description: `
      Mobile application using React Native and Firebase. It is a
      tutor finding app that allows users to find tutors, message
      them, schedule video calls, and book appointments. The app also
      includes a machine learning face verification system to ensure
      that users and tutors are who they say they are.
    `,
      stack: ["React", "Tailwind", "Sql", "AWS"],
      link: "https://github.com/KyleeMendoza/firebaseWebrtc",
    },
    {
      image: ppdms,
      title: "Poultry Management System",
      description: `
      Mobile application using React Native and Firebase. It is a
      tutor finding app that allows users to find tutors, message
      them, schedule video calls, and book appointments. The app also
      includes a machine learning face verification system to ensure
      that users and tutors are who they say they are.
    `,
      stack: ["React", "Tailwind", "Sql", "AWS"],
      link: "https://github.com/KyleeMendoza/firebaseWebrtc",
    },
    {
      image: budgeting,
      title: "Finance Tracker App",
      description: `
      Mobile application using React Native and Firebase. It is a
      tutor finding app that allows users to find tutors, message
      them, schedule video calls, and book appointments. The app also
      includes a machine learning face verification system to ensure
      that users and tutors are who they say they are.
    `,
      stack: ["Expo", "React Native", "Sql"],
      link: "https://github.com/KyleeMendoza/firebaseWebrtc",
    },
  ];

  const { ref: refBody, inView: inViewBody } = useInView({
    threshold: 0.2,
  });

  const h1 = useAnimation();
  const h2 = useAnimation();

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
    <div ref={refBody} className="flex justify-center items-center">
      <div className="w-[90%] lg:max-w-[80%] font-['Poppins'] text-darkBlue ">
        <motion.p
          className="text-md lg:text-xl font-bold mb-3 text-brightRed"
          variants={fromLeft}
          initial={screenWidth >= 1024 ? "hidden" : ""}
          animate={screenWidth >= 1024 ? h1 : ""}
        >
          PROJECTS
        </motion.p>

        <div className="lg:ml-2 ">
          <motion.p
            className="text-2xl lg:text-3xl font-bold "
            variants={fromRight}
            initial={screenWidth >= 1024 ? "hidden" : ""}
            animate={screenWidth >= 1024 ? h2 : ""}
          >
            Each Project has a unique piece of development
          </motion.p>

          {data &&
            data.map((item, index) => (
              <div
                className="flex flex-col gap-4 lg:flex-row py-16 lg:py-20 px-4 lg:px-16 rounded-lg my-10 shadow-middle groceryBg"
                key={index}
              >
                <div className="hidden lg:flex relative flex-1 rounded-lg justify-center items-center">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="max-w-[80%] rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-center font-bold text-3xl text-white">
                    {item.title}
                  </p>
                  <p className="my-3 text-sm text-white text-center">
                    {item.description}
                  </p>
                  <div className="mt-6 flex gap-4 justify-center items-center text-sm lg:text-lg">
                    {item.stack.map((data, key) => (
                      <div
                        className="shadow-offset border border-1 border-white px-4 py-1 rounded-md text-white"
                        key={key}
                      >
                        {data}
                      </div>
                    ))}
                  </div>
                  {/* <div className="flex items-center justify-center font-bold gap-1 mt-5 text-sm lg:text-lg text-white">
                    <a href={item.link}>Preview</a>
                    <FontAwesomeIcon icon={faGithub} className="flex text-lg" />
                  </div> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
