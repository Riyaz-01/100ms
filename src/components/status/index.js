import React from "react";
import "./style.scss";

const Status = ({ status }) => {
  const getColor = (status) => {
    switch (status.toLowerCase()) {
      case "presumed dead":
        return "#FF7A00";
      case "alive":
        return "#5BAF3D";
      case "deceased":
        return "#F16262";
      default:
        return "#4383E3";
    }
  };
  const color = getColor(status);
  return (
    <div className="status" style={{ backgroundColor: color }}>
      {status}
    </div>
  );
};

export default Status;
