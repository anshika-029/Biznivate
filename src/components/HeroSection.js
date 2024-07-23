import React from "react";
import "../Styles/hero.css";

function HeroSection() {
  return (
    <div>
      <header class="header-hero">
      {/* Hero Section - Contents */}
        <div class="sectionContainer header__container">
          <h1>HR Innovation for streamlined success</h1>
          <p class="section__description">
            Your partner for efficient, secure, and expertly managed HR
            processes.
          </p>
          <div class="header__btns">
            <button class="btn-hero btn__primary">
              Call Now
            </button>
            <button class="btn-hero btn__secondary">Get Quotation</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeroSection;
