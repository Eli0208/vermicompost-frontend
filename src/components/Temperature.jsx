import React from "react";
import "./MoistureLevel.css";

function Temperature({ sensor }) {
  const { temp } = sensor || {};
  return (
    <div className="MoistureLevelMajorDiv">
      <div className="MoistureLevelTitleDiv">
        <h1>Temperature</h1>
      </div>
      <div className="MoistureLevelMinorDiv">
        <div className="MoistureLevelValueDiv">
          <h1>{temp ?? "N/A"}</h1>
          <h5>degree Celcius</h5>
        </div>
      </div>
    </div>
  );
}

export default Temperature;
