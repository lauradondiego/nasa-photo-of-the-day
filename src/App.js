import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [image, setImage] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15`
      )
      .then(response => {
        setImage(response.data.hdurl);
        setDate(response.data.date);

        console.log(response.data);
      });
  }, []);
  // the [] means you only want it it to load once

  return (
    <div className="App">
      <h1>Nasa Photo of the Day</h1>
      <h2>{date}</h2>
      <img src={image} alt="planet image" /> 
      {/* javascript image needs curly */}
    </div>
  );
}

export default App;
