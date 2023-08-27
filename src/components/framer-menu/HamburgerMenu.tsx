import * as React from "react";
import { useRef, useState } from "react";
import { motion, sync, useCycle } from "framer-motion";
// import { useDimensions } from "./use-dimensions";
import { Navigation } from "./Navigation";
import Menu from "./Menu";

const sidebar = {
  open: {
    clipPath: `circle(2200px at 384px 45px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
    // zIndex: 1,
  },
  closed: {
    clipPath: "circle(30px at 384px 45px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
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
      } absolute right-0 top-0 w-full h-screen border border-2`}
    >
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-full bg-darkBlue"
        variants={sidebar}
      />

      {/* <div className={`${isOpen ? "block" : "hidden"}`}>
        <Navigation setIsOpen={setIsOpen} isOpen={isOpen} />
      </div> */}
      <Navigation setIsOpen={setIsOpen} isOpen={isOpen} />

      <div className="flex justify-end mt-5 pr-3">
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </motion.nav>
  );
};
