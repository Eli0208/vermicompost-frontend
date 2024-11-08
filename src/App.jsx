import React, { useState, useEffect } from "react";
import "./App.css";
import MoistureLevel from "./components/MoistureLevel";
import NPKcompost from "./components/NPKcompost";
import NPKtea from "./components/NPKtea";
import PHlevel from "./components/PHlevel";
import axios from "axios";

function App() {
  const [sensorData, setSensorData] = useState(null); // State to store sensor data

  useEffect(() => {
    // Fetch data when component mounts
    axios
      .get("http://localhost:5000/api/sensors")
      .then((response) => {
        setSensorData(response.data); // Store response data in state (assuming response.data.sensor is the array)
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []); // Empty dependency array ensures it only runs once on mount

  // If sensorData is still null, render a loading state or return nothing
  if (!sensorData) {
    return <div>Loading...</div>; // Or any loading indicator you prefer
  }

  return (
    <div className="App">
      <div className="appRow">
        <div className="appColumn">
          {/* Only pass sensorData[0] if sensorData exists */}
          <NPKtea sensor={sensorData[0]} />
        </div>
        <div className="appColumn">
          <NPKcompost sensor={sensorData[0]} />
        </div>
      </div>
      <div className="appRow">
        <div className="appColumn">
          <PHlevel sensor={sensorData[0]} />
        </div>
        <div className="appColumn">
          <MoistureLevel sensor={sensorData[0]} />
        </div>
      </div>
    </div>
  );
}

export default App;
