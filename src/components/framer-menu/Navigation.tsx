import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void; // Adjust the type of setIsOpen based on your actual prop type
}

const navData = [
  { path: "#home", name: "Home" },
  { path: "#about", name: "About" },
  { path: "#projects", name: "Projects" },
  { path: "#contact", name: "Contact" },
];

export const Navigation: React.FC<NavigationProps> = ({
  setIsOpen,
  isOpen,
}) => (
  <motion.ul variants={variants} className="absolute right-0 top-16 w-full">
    {navData.map((item, key) => (
      <MenuItem
        name={item.name}
        path={item.path}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        key={key}
      />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
