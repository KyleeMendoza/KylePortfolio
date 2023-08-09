import React, { useState } from "react";
import Hamburger from "hamburger-react";

function Menu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          rounded
          onToggle={(toggled) => {
            if (toggled) {
              // open a menu
            } else {
              // close a menu
            }
          }}
        />
      </div>
    </div>
  );
}

export default Menu;
