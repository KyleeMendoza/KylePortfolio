import * as React from "react";
import { useRef, useState } from "react";
import { motion, sync, useCycle } from "framer-motion";
// import { useDimensions } from "./use-dimensions";
import { Navigation } from "./Navigation";
import Menu from "./Menu";

const sidebar = {
  open: {
    clipPath: `circle(2200px at 89.5% 6%)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
    background: "#0F172A",
    transitionDelay: ".45s",

    // zIndex: 1,
  },
  closed: {
    // clipPath: "circle(30px at 384px 45px)",
    clipPath: "circle(30px at 89.5% 6%)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
    background: "transparent",
    transitionDelay: "0",
    // zIndex: 0,
  },
};

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={`${
        isOpen ? "z-20" : "z-10 delay-1000"
      } absolute right-0 top-0 w-full h-screen`}
      // className={`${isOpen ? "z-20" : "z-10 delay-1000"} `}
    >
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-full"
        variants={sidebar}
      />
      <div className="">
        <Navigation setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <div className="mt-5 px-5 flex justify-end  ">
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </motion.nav>
  );
};
