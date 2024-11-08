import React from "react";
import "./MoistureLevel.css";

function MoistureLevel({ sensor }) {
  const { moisture } = sensor || {};
  return (
    <div className="MoistureLevelMajorDiv">
      <div className="MoistureLevelTitleDiv">
        <h1>Soil moisture level</h1>
      </div>
      <div className="MoistureLevelMinorDiv">
        <div className="MoistureLevelValueDiv">
          <h1>{moisture ?? "N/A"}</h1>
          <h5>percentage</h5>
        </div>
      </div>
    </div>
  );
}

export default MoistureLevel;
