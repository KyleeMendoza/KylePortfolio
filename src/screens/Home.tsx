import React from "react";
import { Button } from "@material-tailwind/react";

import gradPic from "../assets/gradPic.png";

function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex border-2 border-red-600 w-3/4">
        <div className="flex-1 w-1/2 font-sans font-bold text-darkBlue border-2 border-red-300 ">
          <p className="text-5xl">Hi There,</p>
          <p className="text-5xl">
            I'm Kyle <span className="text-midBlue">Mendoza</span>
          </p>
          <p className="text-md font-semibold mt-3">
            I'm into <span>Web Development</span> based in Pasig, Philippines
          </p>
          {/* <button className="border border-2 bg-darkBlue text-white px-4  rounded-full">
            Save Changes
          </button> */}
          <Button className="rounded-full bg-darkBlue mt-3">About Me</Button>
        </div>
        <div className="flex-1 w-1/2">
          <img src={gradPic} alt="Picture" width="300" height="200" />
        </div>
      </div>
    </div>
  );
}

export default Home;
