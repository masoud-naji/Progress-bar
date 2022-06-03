import React from "react";
import "./progressbar.css";

export function ProgressBar({ Data, DataName, DataPercentage,height,borderRadius,background,boxShadow,color,width }) {
  const CreateProgress = (skill, index) => {
    return (
      <div
        key={index}
        className="MyProgress"
        style={{
          overflow: "hidden",
          height: height,
          margin: "0.1rem",
          width: width,
          borderRadius: "0.3rem",
          backgroundColor: "#ffffff",
          borderRadius: borderRadius,
        }}
      >
        <div
          className="progress-done"
          style={{
            opacity: 1,
            width: `${skill[DataPercentage]}%`,
            overflow: "hidden",
            display: "grid",
            alignContent: "center",
            justifyContent: "center",
            fontSize: "0.6rem",
            padding: "0rem",
            margin: "0rem",
            fontWeight: "bold",
            borderRadius: borderRadius,
            background:background,
            boxShadow:boxShadow,
            color: color,
          }}
        >
          <p style={{ marginTop: "-4px" }}>
            {skill[DataName]} {skill[DataPercentage]}%
          </p>
        </div>
      </div>
    );
  };
  return <div>{Object.values(Data).map(CreateProgress)}</div>;
}
