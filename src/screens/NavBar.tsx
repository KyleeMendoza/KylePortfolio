import React, { useState } from "react";

import Logo from "../assets/logo.png";
import Menu from "../components/Menu";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navData = [
    { path: "#home", name: "Home" },
    { path: "#about", name: "About" },
    { path: "#skills", name: "Skills" },
    { path: "#projects", name: "Projects" },
    { path: "#contact", name: "Contact" },
  ];

  return (
    <>
      <div className="md:flex justify-around items-center md:bg-white drop-shadow-lg">
        <div className="flex justify-between items-center px-2">
          <div className="flex items-center text-3xl">
            <img src={Logo} alt="logo" className="w-16 h-16" />
            <p className="font-['Poppins'] font-bold text-darkBlue">Kyle</p>
          </div>
          <div className="block md:hidden">
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>

        <div
          className={`flex flex-col py-10 items-center gap-10 bg-darkBlue text-white ${
            isOpen ? "opacity-100" : "opacity-0"
          } md:opacity-100 md:flex-row md:py-0 md:bg-white md:text-black transition-all duration-400`}
        >
          {/* <div className="absolute w-full left-0 py-10 gap-10 flex flex-col items-center bg-darkBlue text-white opacity-100 md:opacity-100 md:flex-row md:bg-white md:text-black md:w-auto md:py-0 md:static"> */}
          {navData.map((item) => (
            <a
              href={item.path}
              className="btn-hover font-['Poppins'] font-bold text-white hover:text-brightRed transition-all ease-in-out md:text-darkBlue"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default NavBar;
