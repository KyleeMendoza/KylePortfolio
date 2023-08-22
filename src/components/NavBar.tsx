import React, { useState } from "react";

import Logo from "../assets/logo.png";
import Menu from "./framer-menu/Menu";
import { Button } from "@material-tailwind/react";
import { HamburgerMenu } from "./framer-menu/HamburgerMenu";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navData = [
    { path: "#home", name: "Home" },
    { path: "#about", name: "About" },
    { path: "#projects", name: "Projects" },
    { path: "#contact", name: "Contact" },
  ];

  return (
    <>
      <div className="flex justify-center items-center px-5 lg:px-0 pt-5">
        <div className="flex w-full lg:w-[75%] justify-between">
          <div className="w-full lg:w-auto flex justify-between items-center">
            <div className="flex items-center text-3xl cursor-pointer">
              <img src={Logo} alt="logo" className="w-14 h-14" />
              <p className="font-['Poppins'] font-bold text-darkBlue">Kyle</p>
            </div>
            <div className="block lg:hidden">
              {/* <Menu isOpen={isOpen} setIsOpen={setIsOpen} /> */}
              <HamburgerMenu />
            </div>
          </div>

          <div className="hidden items-center gap-10 lg:flex lg:flex-row w-auto py-0 bg-transparent text-black transition-all duration-400">
            {navData.map((item) => (
              <a
                href={item.path}
                className="btn-hover font-['Poppins'] font-bold text-white hover:text-brightRed transition-all ease-in-out lg:text-darkBlue"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center ">
            <div className="uppercase transition-all delay-50 cursor-pointer font-['poppins'] rounded-sm px-4 py-2 text-xs font-bold bg-brightRed text-white border-brightRed shadow-middle">
              Download CV
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
