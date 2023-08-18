import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion, useAnimation, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import groceryBg from "../assets/grocery-bg.png";

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

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const h1 = useAnimation();
  const h2 = useAnimation();
  const title = useAnimation();

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
      title.start((i) => ({
        x: 0,
        opacity: 1,
        transition: { type: "tween", bounce: 0.2, duration: 0.5 },
      }));
    }

    if (!inView) {
      h1.start({
        x: -50,
        opacity: 0,
      });
      h2.start({
        x: 50,
        opacity: 0,
      });
      title.start({
        x: 50,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className="flex justify-center items-center ">
      <div className="w-[75%] font-['Poppins'] text-darkBlue ">
        <motion.p
          className="text-sm font-bold mb-3 text-brightRed"
          animate={h1}
        >
          PROJECTS
        </motion.p>

        <div className="ml-2 ">
          <motion.p className="text-2xl font-bold " animate={h2}>
            Each Project has a unique piece of development
          </motion.p>

          <div className="flex py-20 px-16 rounded-lg my-10 shadow-middle groceryBg">
            <div className="flex-1"></div>
            <div className="flex-1 ">
              <motion.p
                className="text-center font-bold text-2xl text-white "
                animate={title}
                custom={0}
              >
                E-commerce website
              </motion.p>
              <motion.p
                className="my-3 text-sm text-white"
                animate={title}
                custom={0}
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
              <div className="flex items-center justify-center font-bold gap-1 mt-2 text-sm text-white">
                <a href="https://github.com/">Preview</a>
                <FontAwesomeIcon icon={faGithub} className="flex text-lg" />
              </div>
            </div>
          </div>
          <div className="flex py-20 px-16 rounded-lg my-10 shadow-middle OnlineClassBg">
            <div className="flex-1"></div>
            <div className="flex-1 ">
              <motion.p
                className="text-center font-bold text-2xl text-white "
                animate={title}
                custom={1}
              >
                Tutor Finding App
              </motion.p>
              <motion.p
                className="my-3 text-sm text-white"
                animate={title}
                custom={1}
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
              <div className="flex items-center justify-center font-bold gap-1 mt-2 text-sm text-white">
                <a href="https://github.com/">Preview</a>
                <FontAwesomeIcon icon={faGithub} className="flex text-lg" />
              </div>
            </div>
          </div>
          <div className="flex py-20 px-16 rounded-lg my-10 shadow-middle mathBg">
            <div className="flex-1"></div>
            <div className="flex-1 ">
              <motion.p
                className="text-center font-bold text-2xl text-white "
                animate={title}
              >
                Math Quiz Mobile App
              </motion.p>
              <motion.p className="my-3 text-sm text-white" animate={title}>
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
              <div className="flex items-center justify-center font-bold gap-1 mt-2 text-sm text-white">
                <a href="https://github.com/">Preview</a>
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
