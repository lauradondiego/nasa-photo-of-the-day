import React, { useState, useEffect } from "react";
import "./App.scss";
import NasaData from "./Components/NasaData";
import { ImageExampleVerticallyAligned } from "./Components/ImageContent";
import { HeaderExampleUsersIcon } from "./Components/Header";

function App() {
  return (
    <div className="container">
      <div className="Header">
        <HeaderExampleUsersIcon />
      </div>
      <div className="NasaData">
        <NasaData />
        <div className="ImageContent">
          <ImageExampleVerticallyAligned />
        </div>
      </div>
    </div>
  );
}

export default App;
