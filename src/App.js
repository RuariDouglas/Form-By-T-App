import React from "react";
// STYLES
import "./styles/App.scss";
import logo from "./images/bg-noise.png";

// COMPONENTS
import Nav from "./components/navigation/Nav";

const App = () => {
  return (
    <>
      <div
        className="bg-noise"
        style={{ background: `url(${logo}) repeat right top` }}
      ></div>
      <Nav></Nav>
      <div>Form By T</div>
    </>
  );
};

export default App;
