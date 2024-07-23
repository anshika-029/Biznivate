import React, { useState } from "react";
import "../Styles/Contact.css";
import Banner from "../components/Banner";
import SubBanner from "../components/SubBanner";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    comment: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      {/* Banner Component */}
      <Banner
        title="Get in Touch"
        subtitle="Have any questions?"
        additionalText="Reach out to us from our contact form and we will get back to you shortly."
      />

      {/* Sub-Banner Component */}
      <SubBanner
        heading="Let's Talk"
        imageUrl="https://media.istockphoto.com/id/1351993340/photo/asian-business-person-responding-at-the-customer-center.jpg?s=612x612&w=0&k=20&c=zrgcIgJo129KqYSZ3IhwGP3ExwGgYHbXu0t1ZID5B_I="
        buttonText="Apply Now"
      />

      <div className="flex-form">
        <form className="cform">
          <input
            type="text"
            name="firstName"
            placeholder="First name*"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a department*
              </option>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="customerSupport">Customer support</option>
              <option value="financialManagement">Financial Management</option>
            </select>
            <div>
              <textarea
                name="comment"
                rows={5}
                placeholder="Message"
                value={formData.comment}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="but" type="submit">Send Message</button>
          <div className="required">* These fields are required.</div>
        </form>

        {/* Contact Information */}
        <section className="ccontactdetails">
          <div>
            <i className="fa-solid fa-location-dot"></i> Address
          </div>
          <span>Moonshine St. 14/05 Light City, London, United Kingdom</span>

          <div>
            <i className="fa-solid fa-phone"></i> Phone
          </div>
          <span>00 (123) 456 78 90 00 (987) 654 32 10</span>

          <div>
            <i className="fa-solid fa-envelope"></i> E-mail
          </div>
          <span>sandbox@email.com help@sandbox.com</span>
        </section>
      </div>
    </div>
  );
}

export default Contact;
