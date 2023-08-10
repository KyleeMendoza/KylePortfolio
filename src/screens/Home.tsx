import React from "react";
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
import { useTypewriter, Cursor } from "react-simple-typewriter";

import gradPic from "../assets/gradPic.png";

function Home() {
  const [text] = useTypewriter({
    words: ["Developer", "Designer", "Photographer"],
    loop: false,
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className="flex pt-20 justify-center items-center">
      <div className="flex w-2/3">
        <div className="flex-1 w-1/2 font-['Poppins'] font-bold text-darkBlue">
          <p className="text-4xl">Hi There,</p>
          <p className="text-4xl">
            I'm a <span className="text-brightRed">{text}</span>{" "}
            <span>
              <Cursor cursorStyle="<" />
            </span>{" "}
          </p>
          <p className="text-md font-semibold mt-3">
            I'm <span className="text-brightRed">Kyle Mendoza</span>, an
            aspiring Software Developer based in Pasig, Philippines
          </p>
          {/* <button className="border border-2 bg-darkBlue text-white px-4  rounded-full">
            Save Changes
          </button> */}
          <Button className="bg-brightRed my-3">About Me</Button>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/shaclonely">
              <IconButton className="rounded-full block" size="lg">
                <FontAwesomeIcon icon={faFacebook} className="flex text-lg" />
              </IconButton>
            </a>
            <a href="https://twitter.com/kdmendoza00">
              <IconButton className="rounded-full block" size="lg">
                <FontAwesomeIcon icon={faTwitter} className="flex text-lg" />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/kyleemndz/">
              <IconButton className="rounded-full block" size="lg">
                <FontAwesomeIcon icon={faInstagram} className="flex text-lg" />
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/kyleemendoza">
              <IconButton className="rounded-full block" size="lg">
                <FontAwesomeIcon icon={faLinkedin} className="flex text-lg" />
              </IconButton>
            </a>
            <a href="https://github.com/KyleeMendoza">
              <IconButton className="rounded-full block" size="lg">
                <FontAwesomeIcon icon={faGithub} className="flex text-lg" />
              </IconButton>
            </a>
            <a href="https://medium.com/@kylemendoza67">
              <IconButton className="rounded-full block" size="lg">
                <FontAwesomeIcon icon={faMedium} className="flex text-lg" />
              </IconButton>
            </a>
          </div>
        </div>
        <div className="flex-1 w-1/2">
          {/* <img src={gradPic} alt="Picture" width="300" height="200" /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
