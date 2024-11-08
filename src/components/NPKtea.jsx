import React from "react";
import "./NPKtea.css";

function NPKtea({ sensor }) {
  // Destructure values from the sensor object
  const { teaNitro, teaPhos, teaPota } = sensor || {}; // Default to empty object if sensor is null

  console.log(sensor);
  return (
    <div className="NPKteaMajorDiv">
      <div className="NPKteaTitleDiv">
        <h1>NPK (Vermitea)</h1>
      </div>
      <div className="NPKteaMinorDiv">
        <div className="NPKteaValuesDiv">
          <h1>{teaNitro ?? "N/A"}</h1>{" "}
          {/* Use default value if data is not available */}
          <h5>Nitrogen(mg/kg)</h5>
        </div>
        <div className="NPKteaValuesDiv">
          <h1>{teaPhos ?? "N/A"}</h1>
          <h5>Phosphorus(mg/kg)</h5>
        </div>
        <div className="NPKteaValuesDiv">
          <h1>{teaPota ?? "N/A"}</h1>
          <h5>Potassium(mg/kg)</h5>
        </div>
      </div>
    </div>
  );
}

export default NPKtea;
