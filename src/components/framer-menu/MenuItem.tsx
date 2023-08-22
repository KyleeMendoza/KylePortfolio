import * as React from "react";
import { motion } from "framer-motion";

interface menuItemProps {
  path: string;
  name: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    display: "block", //Show the element at the start
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transitionEnd: {
      display: "none", // Hide the element after transition ends
    },
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem: React.FC<menuItemProps> = ({
  name,
  path,
  isOpen,
  setIsOpen,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen); // Toggle the value of isOpen

    // Navigate to the specified path after toggling isOpen
    window.location.href = path;
  };
  return (
    <>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex justify-center m-16 items-center cursor-pointer list-none font-bold text-3xl text-white text-center"
      >
        <a href={path} onClick={handleClick}>
          {name}
        </a>
      </motion.li>
    </>
  );
};
