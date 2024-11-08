import React from "react";
import "./NPKcompost.css";

function NPKcompost({ sensor }) {
  const { comNitro, comPhos, comPota } = sensor || {};
  return (
    <div className="NPKcompostMajorDiv">
      <div className="NPKcompostTitleDiv">
        <h1>NPK (Vermicompost)</h1>
      </div>
      <div className="NPKcompostMinorDiv">
        <div className="NPKcompostValuesDiv">
          <h1>{comNitro ?? "N/A"}</h1>
          <h5>Nitrogen(mg/kg)</h5>
        </div>
        <div className="NPKcompostValuesDiv">
          <h1>{comPhos ?? "N/A"}</h1>
          <h5>Phosphorus(mg/kg)</h5>
        </div>
        <div className="NPKcompostValuesDiv">
          <h1>{comPota ?? "N/A"}</h1>
          <h5>Potassium(mg/kg)</h5>
        </div>
      </div>
    </div>
  );
}

export default NPKcompost;
