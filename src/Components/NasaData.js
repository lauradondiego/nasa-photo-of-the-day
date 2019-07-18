import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.scss";

const NasaData = () => {
  const [image, setImage] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    axios 
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-14`
      )
      .then(response => {
        setImage(response.data.hdurl);
        setDate(response.data.date);

        console.log(response.data);
      });
  }, []);
  // the [] means you only want it it to load once/

  return (
    <div className="App">
      <h2>{date}</h2>
      {/* we defined date in line 7 */}
      <img src={image} style={{ maxWidth: "400px" }} alt="planet image" />
      {/* javascript image needs curly */}
    </div>
  );
};
export default NasaData;
