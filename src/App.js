import React from "react";
import logo from "./assets/CMYK/Logotyp_White.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={logoContainer}>
        <img src={logo} alt="logo" style={imgStyle} />
      </div>
    </div>
  );
}

const imgStyle = {
  height: "60vh",
  marginTop: "8rem",
};
const logoContainer = {
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default App;
