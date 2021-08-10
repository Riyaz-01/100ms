import React from "react";
import "./style.scss";
import cake from "../../assets/cake.png";
import work from "../../assets/work.png";
import Status from "../status";

const Card = ({ data }) => {
  const iconSize = { width: "25px", height: "25px" };
  return (
    <div className="card">
      <div
        className="img"
        style={{
          backgroundImage: `url(${data.img})`,
        }}
      ></div>
      <Status status={data.status} />
      <div className="cardInfo">
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
