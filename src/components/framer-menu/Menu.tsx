import React, { useState } from "react";
import Hamburger from "hamburger-react";

interface MenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({ isOpen, setIsOpen }: MenuProps) {
  return (
    <div>
      <div>
        <Hamburger toggled={isOpen} toggle={setIsOpen} rounded color="red" />
      </div>
    </div>
  );
}

export default Menu;
