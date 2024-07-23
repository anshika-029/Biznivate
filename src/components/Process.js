import React from "react";
import "../Styles/process.css";

function Process() {
  return (
    <div>
      <section className="section-container service__container" id="service">
        <div className="service__image">
          <img
            className="process-img"
            src="https://i.ibb.co/jV4yNBP/process.png"
            alt="service"
          />
        </div>
        <div className="service__content">
          <p className="section__subheader">Our Process</p>
          <h2 className="section__header">
            We follow a meticulous process to ensure excellence
          </h2>
          <ul className="service__list">
            <li>
              <span>
                <i className="fas fa-tags"></i>
              </span>
              <div>
                <h4>Strategy</h4>
                <p>
                  We develop a comprehensive strategy tailored to your specific
                  needs and goals, ensuring a clear path to success.
                </p>
              </div>
            </li>
            <li>
              <span>
                <i className="fas fa-wallet"></i>
              </span>
              <div>
                <h4>Research</h4>
                <p>
                  Our team conducts in-depth research to gather valuable
                  insights and data, forming the foundation for informed
                  decisions.
                </p>
              </div>
            </li>
            <li>
              <span>
                <i className="fas fa-headset"></i>
              </span>
              <div>
                <h4>Execution</h4>
                <p>
                  With a solid strategy and thorough research, we implement
                  effective solutions, delivering outstanding results.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Process;
