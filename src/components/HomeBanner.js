import React from "react";
import "../Styles/homebanner.css";

function HomeBanner() {
  return (
    <div>
      {" "}
      <section class="menu" id="menu">
        <div class="section_container menu__container">
          <ul class="menu__banner">
            <li>
              <h4>42</h4>
              <p>Successful Projects</p>
            </li>
            <li>
              <h4>10+</h4>
              <p>Years of experience</p>
            </li>
            <li>
              <h4>68%</h4>
              <p>Cost savings</p>
            </li>
            <li>
              <h4>1K</h4>
              <p>Email Leads Generated</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default HomeBanner;
