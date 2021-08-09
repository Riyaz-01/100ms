import React from "react";
import ReactLoading from "react-loading";
import "./style.scss";

const Loading = () => (
  <ReactLoading
    type="bars"
    color="green"
    height={367}
    width={375}
    className="loading"
  />
);

export default Loading;
