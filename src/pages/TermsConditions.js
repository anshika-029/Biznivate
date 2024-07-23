import React from "react";
import "../Styles/TermsConditions.css";
import Banner from "../components/Banner";

function termsConditions() {
  return (
    <div>
      {/* Banner Component */}
      <Banner
        title="Terms and Conditions"
        subtitle="When you use our services, you’re trusting us with your information."
        additionalText="We understand this is a big responsibility and work hard to protect your information and put you in control."
      />
      {/* Terms and Condition Component */}
      <div className="conditions">
        <div className="termshead">Introduction</div>
        <div className="termspara">
          Welcome to Biznivate! These terms and conditions outline the rules and
          regulations for the use of Biznivate's website and services.
        </div>
        <div className="termspara">
          By accessing this website, we assume you accept these terms and
          conditions. Do not continue to use Biznivate if you do not agree to
          all the terms and conditions stated on this page.
        </div>
        <div className="termshead">Services</div>
        <div className="termspara">
          Biznivate provides HR innovation services aimed at streamlining
          success for our clients through efficient, secure, and expertly
          managed HR processes. Our services include, but are not limited to, HR
          consultancy, process automation, compliance management, and employee
          management solutions.
        </div>
        <div className="termshead">Intellectual Property Rights</div>
        <div className="termspara">
          Unless otherwise stated, Biznivate and/or its licensors own the
          intellectual property rights for all material on Biznivate. All
          intellectual property rights are reserved. You may access this from
          Biznivate for your own personal use subjected to restrictions set in
          these terms and conditions.
        </div>
        <div className="termspara">You must not:</div>
        <div className="termspara">- Republish material from Biznivate</div>
        <div className="termspara">
          - Sell, rent, or sub-license material from Biznivate
        </div>
        <div className="termspara">
          - Reproduce, duplicate or copy material from Biznivate
        </div>
        <div className="termspara">- Redistribute content from Biznivate</div>
        <div className="termshead">User Accounts</div>
        <div className="termspara">
          To use certain features of our website or services, you may be
          required to create an account with Biznivate. You must ensure that the
          information you provide is accurate, complete, and current at all
          times. You are responsible for safeguarding your account password and
          for any activities or actions under your password.
        </div>
        <div className="termshead">Data Protection</div>
        <div className="termspara">
          Biznivate is committed to protecting your privacy and ensuring the
          security of your personal data. Our Privacy Policy, which is
          incorporated into these terms by reference, explains how we handle
          your personal information.
        </div>
        <div className="termshead">Limitation of Liability</div>
        <div className="termspara">
          Biznivate will not be liable for any damages that arise from the use
          or inability to use the materials on Biznivate’s website, even if
          Biznivate or an authorized representative has been notified orally or
          in writing of the possibility of such damage.
        </div>
        <div className="termshead">Governing Law</div>
        <div className="termspara">
          These terms and conditions are governed by and construed in accordance
          with the laws of India, and you irrevocably submit to the exclusive
          jurisdiction of the courts in that State or location.
        </div>
        <div className="termshead">Changes to These Terms</div>
        <div className="termspara">
          Biznivate reserves the right, at our sole discretion, to modify or
          replace these Terms at any time. If a revision is material, we will
          try to provide at least 30 days' notice prior to any new terms taking
          effect. What constitutes a material change will be determined at our
          sole discretion.
        </div>
        <div className="termshead">Contact Us</div>
        <div className="termspara">
          If you have any questions about these Terms, please contact us at:
        </div>
        <div className="termshead ad">Biznivate Solutions (OPC) Pvt. Ltd.</div>
        <div className="termspara ad">
          HD-224, 10th floor, RMZ Latitude Commercial,
        </div>
        <div className="termspara ad">
          Bellary Road, Hebbal, BLR, KA 560024, IN
        </div>
      </div>{" "}
    </div>
  );
}

export default termsConditions;
