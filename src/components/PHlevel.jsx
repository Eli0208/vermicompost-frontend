import React from "react";
import "./PHlevel.css";

function PHlevel({ sensor }) {
  const { phValue } = sensor || {};
  return (
    <div className="PHLevelMajorDiv">
      <div className="PHLevelTitleDiv">
        <h1>PH level</h1>
      </div>
      <div className="PHLevelMinorDiv">
        <div className="PHLevelValueDiv">
          <h1>{phValue ?? "N/A"}</h1>
          <h5>PH level</h5>
        </div>
      </div>
    </div>
  );
}

export default PHlevel;
