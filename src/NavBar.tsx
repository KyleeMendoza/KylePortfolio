import React, { useState } from "react";

import Logo from "./assets/logo.png";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const navData = [
    { path: "#home", name: "Home" },
    { path: "#about", name: "About" },
    { path: "#skills", name: "Skills" },
    { path: "#projects", name: "Projects" },
    { path: "#contact", name: "Contact" },
  ];

  const hamburgerClose = () => {
    return (
      <>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
      </>
    );
  };

  const hamburgerOpen = () => {
    return (
      <>
        <svg
          className="h-8 w-8 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </>
    );
  };
  return (
    <>
      <div className="border border-1 border-red-600 px-2 flex justify-around">
        <div className="flex items-center text-3xl">
          <img src={Logo} alt="logo" className="w-16 h-16" />
          <p>Kyle</p>
        </div>
        <div className="flex">
          {navData.map((item) => (
            <a href={item.path} className="px-3 flex items-center btn-hover">
              {item.name}
            </a>
          ))}
        </div>
        <div className="border border-1 border-red-600 flex items-center">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            {isNavOpen ? hamburgerOpen() : hamburgerClose()}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
