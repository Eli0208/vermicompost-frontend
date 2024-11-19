import React, { useState, useEffect } from "react";
import "./App.css";
import MoistureLevel from "./components/MoistureLevel";
import NPKcompost from "./components/NPKcompost";
import NPKtea from "./components/NPKtea";
import PHlevel from "./components/PHlevel";
import axios from "axios";
import Temperature from "./components/Temperature";
import Clock from "./components/Clock";

function App() {
  const [sensorData, setSensorData] = useState(null); // State to store sensor data
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date()); // Update the time every second
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);
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
  }, [time]); // Empty dependency array ensures it only runs once on mount

  console.log(sensorData);
  // If sensorData is still null, render a loading state or return nothing
  if (!sensorData) {
    return <div>Loading...</div>; // Or any loading indicator you prefer
  }

  return (
    <div className="App">
      <div className="clock">
        {time.toLocaleTimeString()} {/* Formats the time */}
      </div>
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
        <div className="appColumn">
          <Temperature sensor={sensorData[0]} />
        </div>
      </div>
    </div>
  );
}

export default App;
