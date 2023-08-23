import React, { useState, useEffect } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faTwitter,
  faInstagram,
  faLinkedin,
  faMedium,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logoWhite.png";

function Contact() {
  const [buttonSize, setButtonSize] = useState<"sm" | "lg">("lg"); //size of icon button social links

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Adjust this breakpoint as needed
        setButtonSize("sm");
      } else {
        setButtonSize("lg");
      }
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative flex flex-col h-full items-center justify-center bg-black ">
      <div className="flex w-full lg:w-[75%] font-['Poppins'] font-bold text-white">
        <div className="flex flex-1 flex-col gap-5 items-center justify-center flex-1 ">
          <div className="pt-2 text-xl text-center lg:text-start lg:text-right">
            <p>Feel free to hit me up. I'm looking</p>
            <p>forward to hearing from you.</p>
          </div>
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.facebook.com/shaclonely"
              className="drop-shadow-lg"
            >
              <IconButton
                className="rounded-full block bg-black"
                size={buttonSize}
              >
                <FontAwesomeIcon icon={faFacebook} className="flex text-lg" />
              </IconButton>
            </a>
            <a
              href="https://twitter.com/kdmendoza00"
              className="drop-shadow-lg"
            >
              <IconButton
                className="rounded-full block bg-black"
                size={buttonSize}
              >
                <FontAwesomeIcon icon={faTwitter} className="flex text-lg" />
              </IconButton>
            </a>
            <a
              href="https://www.instagram.com/kyleemndz/"
              className="drop-shadow-lg"
            >
              <IconButton
                className="rounded-full block bg-black"
                size={buttonSize}
              >
                <FontAwesomeIcon icon={faInstagram} className="flex text-lg" />
              </IconButton>
            </a>
            <a
              href="https://www.linkedin.com/in/kyleemendoza"
              className="drop-shadow-lg"
            >
              <IconButton
                className="rounded-full block bg-black"
                size={buttonSize}
              >
                <FontAwesomeIcon icon={faLinkedin} className="flex text-lg" />
              </IconButton>
            </a>
            <a
              href="https://github.com/KyleeMendoza"
              className="drop-shadow-lg"
            >
              <IconButton className="rounded-full bg-black" size={buttonSize}>
                <FontAwesomeIcon icon={faGithub} className="flex text-lg" />
              </IconButton>
            </a>
            <a
              href="https://medium.com/@kylemendoza67"
              className="drop-shadow-lg"
            >
              <IconButton className="rounded-full bg-black" size={buttonSize}>
                <FontAwesomeIcon icon={faMedium} className="flex text-lg" />
              </IconButton>
            </a>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 items-center justify-center ">
          <div className="flex flex-col">
            <img src={Logo} alt="logo" className="w-24 h-24" />
            <p className="text-xl ml-3">kylemendoza67@gmail.com</p>
          </div>
        </div>
      </div>
      {/* <div>
        <a href="#">
          <IconButton
            className="p-4 rounded-full bg-black block border border-2 border-white"
            size="lg"
          >
            <FontAwesomeIcon icon={faArrowUp} className="flex text-lg" />
          </IconButton>
        </a>
      </div> */}
      <div className="absolute bottom-2 text-white text-center text-xs">
        <p>
          2023 - Kyle Mendoza's Website Portfolio. Philippines{" "}
          <span>&copy;</span> All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Contact;
