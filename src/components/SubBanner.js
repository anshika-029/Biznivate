import React from "react";
import "../Styles/SubBanner.css";

const SubBanner = ({ heading, imageUrl, buttonText }) => {
  return (
    <div className="flexwrap">
      <div
        className="carrerimg"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="ccontainer">
        <div className="contacth3">{heading}</div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
          nihil, corrupti numquam maxime nesciunt a amet!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          accusantium, doloribus laboriosam, temporibus, necessitatibus itaque?
          Dolore optio, ullam quibusdam sapiente eos earum dignissimos sint non.
        </p>
        <button className="but">{buttonText}</button>
      </div>
    </div>
  );
};

export default SubBanner;
