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
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          rounded
          // onToggle={(toggled) => {
          //   if (toggled) {
          //     // open a menu
          //   } else {
          //     // close a menu
          //   }
          // }}
        />
      </div>
    </div>
  );
}

export default Menu;
