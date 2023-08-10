import React from "react";
import logo from "./logo.svg";
import "./App.css";

import NavBar from "./screens/NavBar";
import Home from "./screens/Home";
import Particle from "./components/Particle";

function App() {
  return (
    <div className="relative">
      {/* <div className="border border-2 border-red-300 w-full h-screen"> */}
      <div>
        <header>
          <NavBar />
        </header>
        <body>
          <Home />
        </body>
      </div>
      <div className="w-full h-screen absolute top-0 left-0" id="particles">
        <Particle />
      </div>
    </div>
  );
}

export default App;
