import * as React from "react";
import { useRef, useState } from "react";
import { motion, sync, useCycle } from "framer-motion";
// import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Menu from "../Menu";

const sidebar = {
  open: {
    clipPath: `circle(2200px at 384px 45px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(30px at 384px 45px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Example = () => {
  //   const [isOpen, toggleOpen] = useCycle(false, true);
  const [isOpen, setIsOpen] = useState(false);
  //   const containerRef = useRef(null);
  //   const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      //   custom="100px"
      //   ref={containerRef}
      className="absolute right-0 top-0 w-full h-screen border border-2 border-green-600"
    >
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-full bg-darkBlue"
        // className="background"
        variants={sidebar}
      />
      <Navigation />
      {/* <MenuToggle toggle={() => toggleOpen()} /> */}
      <div className="flex justify-end mt-5 pr-3">
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </motion.nav>
  );
};
