import React from "react";
import "../Styles/DigitalAnalytics.css";
import Banner from "../components/Banner";

function JobDescription() {
  return (
    <div>

     {/* Banner Component */}
      <Banner
        title="Job Name"
        subtitle="Want to work with us."
        additionalText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, repudiandae."
      />

      <div className="carrerh1"></div>
      <div className="carrer-img-jd-grid">
        <div>
          <img
            src="https://adoptostaging.blob.core.windows.net/media/digital-marketing-manager-job-description-template-kaPVim.jpg"
            alt="Job Description"
          />
        </div>
        <div className="carrerjd">
          <div className="jdh">Job Description :</div>
          <div>
            <span className="jdhead">Experience : </span>
            <span>4+ Years</span>
          </div>
          <div>
            <span className="jdhead">No Of Vacancies : </span>
            <span>33</span>
          </div>
          <div>
            <span className="jdhead">Working Hours : </span>
            <span>08 Am To 06 Pm</span>
          </div>
          <div>
            <span className="jdhead">Working Days : </span>
            <span>Monday To Friday</span>
          </div>
          <div>
            <span className="jdhead">Salary : </span>
            <span>$48k – $55k</span>
          </div>
          <div>
            <span className="jdhead">Deadline : </span>
            <span>21 June 2024</span>
          </div>
        </div>
      </div>
      <div className="dmm">
        <div className="carrerh1">Data Analytics Specialist</div>
        <p>
          Vestibulum in ipsum velit. Aliquam libero sem asfds asf, rutrum eu
          scelerisque ut, vehicula a erat. Phasellus ac sem sed eratposu quam
          dignissim. Mauris feugiat, nisi nec Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Ducimus, laboriosam! dapibuasas a gas
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus deleniti eaque illum ipsum dolorum libero amet
          delectus! Officia optio cumque necessitatibus. dictum, ligula nulla
          gravida ante, non aliquet odio elit ac orci. Curabit Nunc eu rhoncus
          justo, nec mattis risus auris consequat viverra sapien id lobortis.
          Vivamus auctor turpis.
        </p>
        <div className="carrerh2">Role Overview:</div>
        <p>
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Mauris ut libero nisi. In condimentum ante a
          ultricies tristique. Duis consectetur molestie nunc id dignissim. Nam
          ultricies quis velit viverra tristique. Integer sagittis nibh eu
          tristique fringilla. Fusce quis erat vel lacus ultrices sagittis sed
          vel metus. Cras ante lectus, consectetur ac velit et, commodo
          fermentum urna. Nulla in urna ut massa vehicula posuere in et lacus.
        </p>
        <div className="carrerh2">Primary Responsibilities:</div>
        <p>
          ~ Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          officia deserunt placeat eveniet odio quidem sit, molestiae architecto
          eos, voluptatem deleniti, perspiciatis blanditiis!
        </p>
        <br />
        <p>
          ~ Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          eaque praesentium omnis itaque illo, cum fugit, tenetur veniam
          perferendis consequatur id! Reiciendis modi dolores temporibus!
        </p>
        <br />
        <p>
          ~ Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          sed officia amet incidunt consequuntur in itaque quidem corrupti
          delectus ex.
        </p>
        <br />
        <p>
          ~ Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
          fugiat eius recusandae cupiditate soluta ullam dicta, necessitatibus
          deleniti cum, obcaecati corporis similique qui a.
        </p>
        <button className="but">Apply Now</button>
      </div>
    </div>
  );
}

export default JobDescription;
