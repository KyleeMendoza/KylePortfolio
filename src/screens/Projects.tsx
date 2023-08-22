import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion, useAnimation, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import groceryBg from "../assets/grocery-bg.png";
import ecommerce from "../assets/ecommerce.png";

function Projects() {
  // const projectData = [
  //   {
  //     title: "E-commerce website",
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam tenetur magnam, soluta voluptatem cumque eligendi ut rem sapiente ad totam id eum assumenda maiores quidem voluptates excepturi facere nulla non!",
  //     stack: ["HTML", "CSS", "JavaScript"],
  //     link: "https://github.com/",
  //   },
  //   {
  //     title: "Tutor Finder App",
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam tenetur magnam, soluta voluptatem cumque eligendi ut rem sapiente ad totam id eum assumenda maiores quidem voluptates excepturi facere nulla non!",
  //     stack: ["React Native", "Firebase", "Tailwind"],
  //     link: "https://github.com/",
  //   },
  // ];

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
      // title.start((i) => ({
      //   x: 0,
      //   opacity: 1,
      //   transition: { type: "tween", bounce: 0.2, duration: 0.5 },
      // }));
    }

    if (!inViewBody) {
      h1.start({
        x: -50,
        opacity: 0,
      });
      h2.start({
        x: 50,
        opacity: 0,
      });
      // title.start({
      //   x: 50,
      //   opacity: 0,
      // });
    }
  }, [inViewBody]);

  useEffect(() => {
    if (inViewCard1) {
      title1.start({
        x: 0,
        opacity: 1,
        transition: { type: "tween", bounce: 0.2, duration: 0.5 },
      });
    }

    if (!inViewCard1) {
      title1.start({
        x: 50,
        opacity: 0,
      });
    }
  }, [inViewCard1]);

  useEffect(() => {
    if (inViewCard2) {
      title2.start({
        x: 0,
        opacity: 1,
        transition: { type: "tween", bounce: 0.2, duration: 0.5 },
      });
    }

    if (!inViewCard2) {
      title2.start({
        x: 50,
        opacity: 0,
      });
    }
  }, [inViewCard2]);

  useEffect(() => {
    if (inViewCard3) {
      title3.start({
        x: 0,
        opacity: 1,
        transition: { type: "tween", bounce: 0.2, duration: 0.5 },
      });
    }

    if (!inViewCard3) {
      title3.start({
        x: 50,
        opacity: 0,
      });
    }
  }, [inViewCard3]);

  return (
    <div ref={refBody} className="flex justify-center items-center ">
      <div className="w-[90%] lg:w-[75%] font-['Poppins'] text-darkBlue ">
        <motion.p
          className="text-sm font-bold mb-3 text-brightRed"
          animate={h1}
        >
          PROJECTS
        </motion.p>

        <div className="lg:ml-2 ">
          <motion.p className="text-2xl font-bold " animate={h2}>
            Each Project has a unique piece of development
          </motion.p>

          <div
            className="flex flex-col gap-4 lg:flex-row py-20 px-16 rounded-lg my-10 shadow-middle groceryBg "
            ref={refCard1}
          >
            <div className="flex-1 rounded-lg ecommerceBg"></div>
            <div className="flex-1 ">
              <motion.p
                className="text-center font-bold text-2xl text-white "
                animate={title1}
              >
                E-commerce website
              </motion.p>
              <motion.p
                className="my-3 text-sm text-white text-center lg:text-start"
                animate={title1}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam tenetur magnam, soluta voluptatem cumque eligendi ut
                rem sapiente ad totam id eum assumenda maiores quidem voluptates
                excepturi facere nulla non!
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
            className="flex flex-col gap-4 lg:flex-row py-20 px-16 rounded-lg my-10 shadow-middle OnlineClassBg"
            ref={refCard2}
          >
            <div className="flex-1 rounded-lg taguroBg"></div>
            <div className="flex-1 ">
              <motion.p
                className="text-center font-bold text-2xl text-white "
                animate={title2}
              >
                Tutor Finding App
              </motion.p>
              <motion.p
                className="my-3 text-sm text-white text-center lg:text-start"
                animate={title2}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam tenetur magnam, soluta voluptatem cumque eligendi ut
                rem sapiente ad totam id eum assumenda maiores quidem voluptates
                excepturi facere nulla non!
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
            <div className="flex-1"></div>
            <div className="flex-1 ">
              <motion.p
                className="text-center font-bold text-2xl text-white "
                animate={title3}
              >
                Math Quiz Mobile App
              </motion.p>
              <motion.p
                className="my-3 text-sm text-white text-center lg:text-start"
                animate={title3}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam tenetur magnam, soluta voluptatem cumque eligendi ut
                rem sapiente ad totam id eum assumenda maiores quidem voluptates
                excepturi facere nulla non!
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
