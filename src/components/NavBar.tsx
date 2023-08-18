import React, { useState } from "react";

import Logo from "../assets/logo.png";
import Menu from "./Menu";
import { Button } from "@material-tailwind/react";

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
      <div className="md:flex justify-center items-center pt-5">
        <div className="flex w-[75%] justify-between ">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-3xl">
              <img src={Logo} alt="logo" className="w-14 h-14" />
              <p className="font-['Poppins'] font-bold text-darkBlue">Kyle</p>
            </div>
            <div className="block md:hidden">
              <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>

          <div
            className={`flex flex-col py-10 items-center gap-10 bg-darkBlue text-white ${
              isOpen ? "opacity-100" : "opacity-0"
            } md:opacity-100 md:flex-row md:py-0 md:bg-transparent md:text-black transition-all duration-400`}
          >
            {navData.map((item) => (
              <a
                href={item.path}
                className="btn-hover font-['Poppins'] font-bold text-white hover:text-brightRed transition-all ease-in-out md:text-darkBlue"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center">
            <div className="transition-all delay-50 cursor-pointer border border-1 border-black font-['poppins'] rounded-lg px-4 py-2 text-xs font-bold text-brightRed hover:bg-brightRed hover:text-white hover:border-brightRed hover:drop-shadow-md">
              DOWNLOAD CV
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
