import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="separation"></div>
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <ul>
              <li>
                <div className="logo-footer">
                
                  <img
                    width="180"
                    height="50"
                    src="https://biznivate.com/biznivate/assets/biznivate/biznivate.svg"
                    alt="logo"
                  />
                </div>
              </li>
              <br />

              {/* Column 1 */}
              <li className="footer-heading">
                Biznivate Solutions (OPC) Pvt. Ltd.
              </li>
              <li>HD-224, 10th floor, RMZ Latitude Commercial,</li>
              <li>Bellary Road, Hebbal, BLR, KA 560024, IN</li>
              <br />
              <li className="social-icons">
                <a href="facebook" className="icon">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="facebook" className="icon">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="facebook" className="icon">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="facebook" className="icon">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul>
              <li className="footer-heading">SERVICES</li>
              <br />
              <li>
                <a href="/consulting">Consulting</a>
              </li>
              <li>
                <a href="/resources">Human Resources</a>
              </li>
              <li>
                <a href="/accounting">Accounting</a>
              </li>
              <li>
                <a href="/marketing">Marketing & SEO</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul>
              <li className="footer-heading">ABOUT</li>
              <br />
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/privacypolicy">Privacy Policy</a>
              </li>
              <li>
                <a href="/blog">Our Blog</a>
              </li>
              <li>
                <a href="/termsconditions">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <ul>
              <li className="footer-heading">CONTACT</li>
              <br />
              <li>
                <i className="fa-solid fa-phone"></i> +1234 567 8900
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>{" "}
                consulting@biznivate.com
              </li>
            </ul>
          </div>
        </div>
        <hr className="footer-hr"></hr>
        <div className="copyright">
          Copyright © 2024 Biznivate Solutions. All rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
