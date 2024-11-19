import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date()); // Update the time every second
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock">
      {time.toLocaleTimeString()} {/* Formats the time */}
    </div>
  );
};

export default Clock;
