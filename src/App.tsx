import React from "react";
import logo from "./logo.svg";
import "./App.css";

import NavBar from "./screens/NavBar";
import Home from "./screens/Home";

function App() {
  return (
    <div>
      <header>
        <NavBar />
        {/* <Container className="border border-danger">
          <Home />
        </Container> */}
        <Home />
      </header>
    </div>
  );
}

export default App;
