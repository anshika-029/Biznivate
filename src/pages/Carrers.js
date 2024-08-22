import React from "react";
import "../Styles/Carrers.css";
import Banner from "../components/Banner";
import SubBanner from "../components/SubBanner";

function Carrers() {
  const careerData = [
    {
      title: "Digital Marketing Manager",
      link: "/jobdescription",
      location: "Remote - UK - Full Time",
    },
    {
      title: "Social Media Manager",
      link: "/jobdescription",
      location: "Remote - UK - Full Time",
    },
    {
      title: "Email Marketing Manager",
      link: "/jobdescription",
      location: "Remote - UK - Full Time",
    },
    {
      title: "SEO Specialist",
      link: "/jobdescription",
      location: "Remote - UK - Full Time",
    },
    {
      title: "Digital Analytics Specialist",
      link: "/jobdescription",
      location: "Remote - UK - Full Time",
    },
    {
      title: "Content Marketer",
      link: "/jobdescription",
      location: "Remote - UK - Full Time",
    },
    {
      title: "Logo Designer",
      link: "/jobdescription",
      location: "Remote - UK - Full Time",
    },
    { title: "CRM Manager", link: "/jobdescription", location: "Remote - UK - Full Time" },
  ];

  return (
    <div>
     {/* Banner Component */}
      <Banner
        title="Careers"
        subtitle="Want to work with us. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, repudiandae."
        // additionalText=""
      />

       {/* Sub-Banner Component */}
      <SubBanner
        heading="Join Our Team"
        imageUrl="https://media.istockphoto.com/id/979622962/photo/hand-putting-wooden-cube-block-on-blue-background-with-word-career-and-copy-space-for-your.jpg?s=612x612&w=0&k=20&c=WtIeJMPJ-6ozlnpyps0R2TLwMSTYFtWAT6yRBQymRSg="
        buttonText="Apply Now"
      />

      <div className="carrercontainer">
        {careerData.map((career, index) => (
          <div key={index} className="carrercards">
            <div className="carrer-h-row">
              <div className="c1">{career.title}</div>
            </div>
            <div className="c1h">{career.location}</div>
            <div>
                <a href={career.link}>
                  <button className="but">Read More</button>
                </a>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrers;
