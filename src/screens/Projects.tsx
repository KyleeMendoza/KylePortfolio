import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion, useAnimation, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Projects() {
  const projectData = [
    {
      title: "E-commerce website",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam tenetur magnam, soluta voluptatem cumque eligendi ut rem sapiente ad totam id eum assumenda maiores quidem voluptates excepturi facere nulla non!",
      stack: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/",
    },
    {
      title: "Tutor Finder App",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam tenetur magnam, soluta voluptatem cumque eligendi ut rem sapiente ad totam id eum assumenda maiores quidem voluptates excepturi facere nulla non!",
      stack: ["React Native", "Firebase", "Tailwind"],
      link: "https://github.com/",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.4,
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
      title.start({
        x: 0,
        opacity: 1,
        transition: { type: "tween", bounce: 0.2, duration: 0.5 },
      });
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
          {projectData.map((item) => (
            <div className="flex p-4 border-l-8 border-brightRed rounded-lg my-10 shadow-middle bg-white">
              <div className="flex-1"></div>
              <div className="flex-1">
                <motion.p
                  className="text-center font-bold text-lg text-brightRed"
                  animate={title}
                >
                  {item.title}
                </motion.p>
                <motion.p className="my-3 text-sm" animate={title}>
                  {item.description}
                </motion.p>
                <div className="mt-6 flex gap-4 justify-center items-center ">
                  {item.stack.map((element, index) => (
                    <div
                      key={index}
                      className="shadow-offset border border-1 border-black px-4 py-1 rounded-md text-sm"
                    >
                      {element}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center font-bold gap-1 mt-2 text-sm">
                  <a href={item.link}>Preview</a>
                  <FontAwesomeIcon icon={faGithub} className="flex text-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
