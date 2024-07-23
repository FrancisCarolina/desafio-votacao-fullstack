import React from "react";
import "./Loader.css";

const Loader = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="loader-backdrop">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
