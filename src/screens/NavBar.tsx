import React, { useState } from "react";

import Logo from "../assets/logo.png";
import Menu from "../components/Menu";

function NavBar() {
  const navData = [
    { path: "#home", name: "Home" },
    { path: "#about", name: "About" },
    { path: "#skills", name: "Skills" },
    { path: "#projects", name: "Projects" },
    { path: "#contact", name: "Contact" },
  ];

  return (
    <>
      <div className="border border-1 border-red-600 h-screen md:h-auto md:flex justify-around items-center ">
        <div className="flex items-center text-3xl">
          <img src={Logo} alt="logo" className="w-16 h-16" />
          <p className="font-sans font-bold">Kyle</p>
        </div>
        <div className="border border-1 border-yellow-600 flex flex-col absolute w-full left-0 items-center justify-between md:static md:w-auto md:flex-row md:gap-10">
          {/* <div className="border border-1 border-green-600 flex flex-col items-center md:flex-row md:gap-10"> */}
          {navData.map((item) => (
            <a
              href={item.path}
              className="btn-hover font-sans font-medium hover:text-hoverBlue transition"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* <div className="block md:hidden">
          <Menu />
        </div> */}
      </div>
    </>
  );
}

export default NavBar;
