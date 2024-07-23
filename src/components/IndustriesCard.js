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
          <div className="industries__card">
            <span>
              <i className="fas fa-tags"></i>
            </span>
            <h4>Financial</h4>
          </div>
          <div className="industries__card">
            <span>
              <i className="fas fa-rupee-sign"></i>
            </span>
            <h4>Social Media</h4>
          </div>
          <div className="industries__card">
            <span>
              <i className="fas fa-credit-card"></i>
            </span>
            <h4>Marketing</h4>
          </div>
          <div className="industries__card">
            <span>
              <i className="fas fa-trophy"></i>
            </span>
            <h4>IT Technology</h4>
          </div>
          <div className="industries__card">
            <span>
              <i className="fas fa-user-cog"></i>
            </span>
            <h4>HR Management</h4>
          </div>
          <div className="industries__card">
            <span>
              <i className="fas fa-car"></i>
            </span>
            <h4>IT Technology</h4>
          </div>
          <img
            className="img-industries"
            src="https://i.ibb.co/Vvc3hR5/beautiful-young-woman-with-six-hands-white-background-567313-18539.jpg"
            alt="industries"
          />
        </div>
      </section>
    </div>
  );
};

export default IndustriesCard;
