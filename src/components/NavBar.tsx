import React, { useState } from "react";

import Logo from "../assets/logo.png";
import Menu from "./Menu";
import { Button } from "@material-tailwind/react";
import { Example } from "./framer-menu/Example";

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
            <div className="flex items-center text-3xl border border-2 border-red-600">
              <img src={Logo} alt="logo" className="w-14 h-14" />
              <p className="font-['Poppins'] font-bold text-darkBlue">Kyle</p>
            </div>
            <div className="block lg:hidden">
              {/* <Menu isOpen={isOpen} setIsOpen={setIsOpen} /> */}
              <Example />
            </div>
          </div>

          <div
            className={`absolute top-20 left-0 w-full z-10 flex flex-col py-10 items-center gap-10 bg-darkBlue text-white lg:flex lg:flex-row lg:opacity-100 lg:static lg:w-auto lg:z-0 lg:py-0 lg:bg-transparent lg:text-black transition-all duration-400 
            ${isOpen ? "opacity-100 growDown" : "hidden"}`}
          >
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
