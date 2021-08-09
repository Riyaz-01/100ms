import React from "react";
import "./style.scss";
import cake from "../../assets/cake.png";
import work from "../../assets/work.png";

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
const Card = ({ data }) => {
  const color = getColor(data.status);
  const iconSize = { width: "35px", height: "35px" };
  return (
    <div className="card">
      <div
        className="img"
        style={{
          backgroundImage: `url(${data.img})`,
        }}
      ></div>
      <div className="status" style={{ backgroundColor: color }}>
        {data.status}
      </div>
      <div className="info">
        <div className="name">{data.name}</div>
        <div className="bdayInfo">
          <img src={cake} {...iconSize} />
          <div className="bday">{data.birthday}</div>
        </div>
        <div className="workInfo">
          <img src={work} {...iconSize} />
          <div className="work">{data.occupation[0]}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
