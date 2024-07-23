import React from "react";
import "../Styles/Banner.css";

function Banner({ title, subtitle, additionalText }) {
  return (
    <div className="headbg">
      <div className="head1">{title}</div>
      <div className="head2">{subtitle}</div>
      {additionalText && <div className="head2">{additionalText}</div>}
    </div>
  );
}

export default Banner;
