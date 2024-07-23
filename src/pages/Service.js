import React from "react";
import "../Styles/Service.css";
import Banner from "../components/Banner";

function Service() {
  const services = [
    {
      title: 'Finance & Strategy Service',
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20220320/pngtree-our-services-text-concept-consumer-life-competition-photo-image_21774290.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, laboriosam facere ad sunt eum nemo omnis deserunt rem assumenda.'
    },
    {
      title: 'Marketing Solutions',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
      description: 'Lorem ipsum dolor sit elit. Ut, laboriosam consectetur adipisicing elit. Magni cumque nisi?'
    },
    {
      title: 'Customer Support Excellence',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aut nihil error dolores iusto alias, recusandae sed quaerat optio assumenda.'
    },
    {
      title: 'Financial Management',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptas ipsa repudiandae beatae nihil magnam cumque nisi?'
    },
    {
      title: 'Business Development',
      image: 'https://images.pexels.com/photos/1814300/pexels-photo-1814300.jpeg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, provident? Aut perferendis necessitatibus corrupti obcaecati officia?'
    }
  ];

  return (
    <div>
      <Banner
        title="Services"
        subtitle="Lorem ipsum dolor sit amet."
        additionalText="Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet."
      />
      <div className="service-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="card-header">
              <img src={service.image} alt={service.title} className="card-image" />
            </div>
            <div className="card-body">
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
