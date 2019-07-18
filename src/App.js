import React, { useState, useEffect } from "react";
import "./App.scss";
import NasaData from "./Components/NasaData";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Nasa Photo of the Day</h1>
      </div>
      <div className="NasaData">
        <NasaData />
      </div>
    </div>
  );
}

export default App;
