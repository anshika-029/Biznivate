import React from "react";
import "../Styles/PrivacyPolicy.css";
import Banner from "../components/Banner";

function PrivacyPolicy() {
  return (
    <div>
      {/* Banner Component */}
      <Banner
        title="Privacy Policy"
        subtitle="In the Privacy Policy, we explain how we collect, use, share, retain and transfer information."
        additionalText="We also let you know your rights. Each section of the Policy includes simpler language to make our practices easier to understand."
      />

      {/* Terms and Condition Component */}
      <div className="conditions">
        <div className="termshead">Introduction</div>
        <div className="termspara">
          Biznivate ("we", "our", "us") is committed to protecting and
          respecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website and use our services. By using our website and services, you
          agree to the collection and use of information in accordance with this
          policy.
        </div>

        <div className="termshead">Information We Collect</div>
        <div className="termspara">
          We may collect and process the following data about you:
        </div>

        <div className="termshead">Personal Information</div>

        <div>
          <span className="termshp">- Contact Information:</span>
          <span className="termspara">
            {" "}
            Name, email address, phone number, company name, and job title.
          </span>
        </div>

        <div>
          <span className="termshp">- Account Information:</span>
          <span className="termspara">
            {" "}
            Username, password, and other registration information.
          </span>
        </div>

        <div className="last">
          <span className="termshp">- Service Data:</span>
          <span className="termspara">
            {" "}
            Information related to the HR services we provide, including
            employee data provided by our clients.
          </span>
        </div>

        <div className="termshead">Non-Personal Information</div>

        <div>
          <span className="termshp">- Usage Data: </span>
          <span className="termspara">
            {" "}
            Information on how you use our website, products, and services.
          </span>
        </div>

        <div className="last">
          <span className="termshp">- Technical Data:</span>
          <span className="termspara">
            {" "}
            IP address, browser type and version, time zone setting, browser
            plug-in types and versions, operating system, and platform.
          </span>
        </div>

        <div className="termshead">How We Use Your Information</div>
        <div className="termspara">
          We use the information we collect in the following ways:
        </div>

        <div>
          <span className="termshp">- To Provide and Manage Services:</span>
          <span className="termspara">
            {" "}
            To deliver the HR services you have requested, manage your account,
            and communicate with you about our services.
          </span>
        </div>

        <div>
          <span className="termshp">- To Improve Our Services:</span>
          <span className="termspara">
            {" "}
            To understand how our services are used and to improve and develop
            our services.
          </span>
        </div>

        <div>
          <span className="termshp">- To Communicate with You:</span>
          <span className="termspara">
            {" "}
            To send you updates, promotional materials, and other information
            that may be of interest to you.
          </span>
        </div>

        <div className="last">
          <span className="termshp">- To Ensure Compliance:</span>
          <span className="termspara">
            {" "}
            To ensure compliance with legal obligations and protect the rights
            and safety of our users and third parties.
          </span>
        </div>

        <div className="termshead">How We Share Your Information</div>
        <div className="termspara">We may share your information with:</div>

        <div>
          <span className="termshp">- Service Providers:</span>
          <span className="termspara">
            {" "}
            Third-party vendors that provide services on our behalf, such as
            hosting, data analysis, and customer service.
          </span>
        </div>

        <div>
          <span className="termshp">- Affiliates:</span>
          <span className="termspara">
            {" "}
            Our affiliates to provide our services or for internal business
            purposes.
          </span>
        </div>

        <div className="last">
          <span className="termshp">- Legal Requirements:</span>
          <span className="termspara">
            {" "}
            If required to do so by law or in response to valid requests by
            public authorities.
          </span>
        </div>

        <div className="termshead">Data Security</div>
        <div className="termspara">
          We use administrative, technical, and physical security measures to
          protect your personal information. While we strive to protect your
          information, no method of transmission over the Internet or method of
          electronic storage is 100% secure.
        </div>

        <div className="termshead">Your Data Protection Rights</div>
        <div className="termspara">
          Depending on your location, you may have the following rights
          regarding your personal data:
        </div>

        <div>
          <span className="termshp">- Access: </span>
          <span className="termspara">
            {" "}
            The right to access and obtain a copy of your personal data.
          </span>
        </div>

        <div>
          <span className="termshp">- Rectification: </span>
          <span className="termspara">
            {" "}
            The right to correct any inaccuracies in your personal data.
          </span>
        </div>

        <div>
          <span className="termshp">- Erasure:</span>
          <span className="termspara">
            {" "}
            The right to request the deletion of your personal data.
          </span>
        </div>

        <div>
          <span className="termshp">- Restriction:</span>
          <span className="termspara">
            {" "}
            The right to restrict the processing of your personal data.
          </span>
        </div>

        <div>
          <span className="termshp">- Objection: </span>
          <span className="termspara">
            {" "}
            The right to object to the processing of your personal data.
          </span>
        </div>

        <div className="last">
          <span className="termshp">- Data Portability: </span>
          <span className="termspara">
            {" "}
            The right to receive your personal data in a structured, commonly
            used, and machine-readable format.
          </span>
        </div>

        <div className="termspara">
          To exercise these rights, please contact us at the information
          provided below.
        </div>

        <div className="termshead">Changes to This Privacy Policy</div>
        <div className="termspara">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page. You are
          advised to review this Privacy Policy periodically for any changes.
        </div>

        <div className="termshead">Contact Us</div>
        <div className="termspara">
          If you have any questions about this Privacy Policy, please contact
          us:
        </div>

        <div className="termshead ad">Biznivate Solutions (OPC) Pvt. Ltd.</div>
        <div className="termspara ad">
          HD-224, 10th floor, RMZ Latitude Commercial,
        </div>
        <div className="termspara ad">
          Bellary Road, Hebbal, BLR, KA 560024, IN
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
