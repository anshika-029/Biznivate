import React from "react";
import "../Styles/hero.css";
import { Link } from 'react-router-dom';


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
            <Link to="/contact">
              <button class="btn-hero btn__primary">
                Let's Talk
              </button>
            </Link>

            <button class="btn-hero btn__secondary">Get Quotation</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeroSection;
