import React from "react";
import "./style.scss";
import coverImage from "../../assets/cover.jpg";

const Header = ({ className, style }) => {
  return (
    <div className={`header ${className}`} {...style}>
      <div>Breaking Bad Wiki</div>
    </div>
  );
};

export default Header;
