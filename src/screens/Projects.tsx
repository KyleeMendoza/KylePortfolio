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
      This website is built using React.js, with the primary purpose of catering to clients who want to avail themselves of catering services for various events. Clients can book events and choose their package according to their preferences. The website also includes an admin side that accepts or rejects bookings.
    `,
      stack: ["React", "Tailwind", "Sql", "AWS"],
      link: "",
    },
    {
      image: profiling,
      title: "Profile Repository Website",
      description: `
      
The primary objective of this website is to facilitate the storage and management of individuals' profiles across various categories, specifically focusing on their classification as drug-related persons. Developed as a project proposal intended for local government utilization, this platform offers comprehensive CRUD functionality. It enables the systematic recording and tracking of individuals who have been identified or labeled as being involved in drug-related activities.
    `,
      stack: ["React", "Tailwind", "Sql", "AWS"],
      link: "https://github.com/KyleeMendoza/firebaseWebrtc",
    },
    {
      image: dental,
      title: "Dental Appointment Website",
      description: `
      
This website is designed for a small dental clinic to streamline client bookings and appointments online. Users can conveniently schedule appointments via the platform, selecting their specific purpose for the visit. Additionally, they can track their dental procedures through an interactive teeth SVG, which they can hover over to view details of the treatment received. The website also includes an administrative interface for managing appointments, allowing staff to accept or decline bookings.
    `,
      stack: ["React", "Tailwind", "Sql", "AWS"],
      link: "https://github.com/KyleeMendoza/firebaseWebrtc",
    },
    {
      image: ppdms,
      title: "Poultry Management System",
      description: `
      This website serves as a platform for monitoring online poultry sales and accessing insightful statistics pertaining to egg and chicken sales within a poultry farm. With role-based authentication implemented, transparency is ensured by providing role-specific access to relevant information. Only superadmins possess the authority to export crucial data, maintaining control over the dissemination of sensitive information.
    `,
      stack: ["React", "Tailwind", "Sql", "AWS"],
      link: "https://github.com/KyleeMendoza/firebaseWebrtc",
    },
    {
      image: budgeting,
      title: "Finance Tracker App",
      description: `
   
This mobile application caters to users seeking to meticulously track their expenses across various categories. Offering a comprehensive suite of features, it provides insights into projected expenses based on users' past entries, filtered according to different timeframes. Additionally, the app empowers users to visualize their expenditure patterns through diverse types of graphs, facilitating a deeper understanding of their financial habits.
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
