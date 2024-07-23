import React from "react";
import "../Styles/Main.css";
import IndustriesCard from "./IndustriesCard";
import Newsletter from "./Newsletter";
import Process from "./Process";
import HomeBanner from "./HomeBanner";
import HeroSection from "./HeroSection";

function Main() {
  return (
    <div>
      <main>
      {/* Homepage Contents */}
        <HeroSection />
        <Process />
        <HomeBanner />
        <IndustriesCard />
        <Newsletter />
      </main>
    </div>
  );
}

export default Main;
