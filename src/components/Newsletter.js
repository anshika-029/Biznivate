import React from "react";
import "../Styles/newsletter.css";

function Newsletter() {
  return (
    <div>
      <section className="subscribe">
        <div className="section__container subscribe__container">
          <h2>Subscribe to our newsletter for updates</h2>
          <div>
            <p>For the best recommendation of your. Please subscribe us.</p>
            <form>
              <input type="text" placeholder="Enter Your Email Here" />
              <button className="btn-newsletter">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Newsletter;
