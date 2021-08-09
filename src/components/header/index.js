import React from "react";
import "./style.scss";
import coverImage from "../../img/cover.jpg";

const Header = () => {
  return (
    <div className="header" style={{ backgroundImage: `url(${coverImage})` }}>
      <h1>The Breaking Bad Wiki</h1>
    </div>
  );
};

export default Header;
