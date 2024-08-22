import React from "react";
import "../Styles/IndustriesCard.css";

const IndustriesCard = () => {
  return (
    <div>
      <section className="section__container industries__container" id="ride">
        <p className="section__subheader">Industries in which we work</p>
        <h2 className="section__header">
          We are ensuring our best in every industries
        </h2>
        <div className="industries__content">
          <a href="#">
            <div className="industries_card" id="f">
              <h4>Financial</h4>
            </div>
          </a>
          <a href="#">
            <div className="industries_card sm">
            <h4>Social Media</h4>
          </div>
            </a>
          <a href="#">
            <div className="industries_card m">
            <h4>Marketing</h4>
          </div>
            </a>
          <a href="#">
            <div className="industries_card it">
            <h4>IT Technology</h4>
          </div>
            </a>
        </div>
      </section>
    </div>
  );
};

export default IndustriesCard;
