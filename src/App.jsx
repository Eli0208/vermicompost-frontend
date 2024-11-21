import React, { useState, useEffect } from "react";
import "./App.css";
import MoistureLevel from "./components/MoistureLevel";
import PHlevel from "./components/PHlevel";
import axios from "axios";
import Temperature from "./components/Temperature";

function App() {
  const [sensorData, setSensorData] = useState(null); // State to store sensor data
  const [time, setTime] = useState(new Date());
  const [notifications, setNotifications] = useState([]); // State for notification messages

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
      .get("https://vermicompost-backend.onrender.com/api/sensors")
      .then((response) => {
        setSensorData(response.data); // Store response data in state

        const temp = response.data[0]?.temp; // Assuming the temperature is in the first sensor object
        const ph = response.data[0]?.phValue; // Assuming pH is in the first sensor object
        const moisture = response.data[0]?.moisture; // Assuming moisture is in the first sensor object

        // Clear existing notifications and add new ones based on conditions
        let newNotifications = [];

        if (temp && temp > 55) {
          newNotifications.push(
            "Warning: Temperature is above 55°C (Too Hot)!"
          );
        } else if (temp && temp < 45) {
          newNotifications.push("Warning: Temperature is below 45°C!");
        }

        if (ph && ph < 6) {
          newNotifications.push("Warning: Tea is too acidic (pH below 6)!");
        }

        if (moisture && (moisture < 50 || moisture > 60)) {
          newNotifications.push(
            "Warning: Moisture level is out of the optimal range (50-60%)!"
          );
        }

        setNotifications(newNotifications); // Update the notifications state with the new messages
      })
      .catch((error) => {
        console.error("There was an error fetching sensor data!", error);
      });
  }, [time]); // Re-fetch data every time the time changes

  // If sensorData is still null, render a loading state or return nothing
  if (!sensorData) {
    return <div>Loading...</div>; // Or any loading indicator you prefer
  }

  return (
    <div className="App">
      <div className="sidebar">
        <div className="clock">
          {time.toLocaleTimeString()} {/* Formats the time */}
        </div>
        {notifications.length > 0 && (
          <div className="notification">
            {notifications.map((notif, index) => (
              <div key={index}>{notif}</div> // Display each notification message
            ))}
          </div>
        )}
      </div>
      <div className="mainContent">
        <div className="appRow">
          <div className="appColumn">
            <PHlevel sensor={sensorData[0]} />
          </div>
          <div className="appColumn">
            <MoistureLevel sensor={sensorData[0]} />
          </div>
        </div>
        <div className="appRow">
          <div className="appColumn">
            <Temperature sensor={sensorData[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
