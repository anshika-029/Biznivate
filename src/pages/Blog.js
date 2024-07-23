import React from "react";
import "../Styles/Blog.css";
import Banner from "../components/Banner";

function Blog() {
  const blogData = [
    {
      id: 1,
      date: "Admin | August 15, 2023",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.",
      image:
        "https://img.freepik.com/premium-photo/laptop-notebook-desk_1048944-30522547.jpg?size=626&ext=jpg&ga=GA1.1.1730006803.1721025434&semt=ais_user",
    },
    {
      id: 2,
      date: "Admin | August 15, 2023",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.",
      image:
        "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?cs=srgb&dl=pexels-veeterzy-303383.jpg&fm=jpg",
    },
    {
      id: 3,
      date: "Admin | August 15, 2023",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.",
      image:
        "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?cs=srgb&dl=pexels-veeterzy-303383.jpg&fm=jpg",
    },
    {
      id: 4,
      date: "Admin | August 15, 2023",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.",
      image:
        "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?cs=srgb&dl=pexels-veeterzy-303383.jpg&fm=jpg",
    },
    {
      id: 5,
      date: "Admin | August 15, 2023",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.",
      image:
        "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?cs=srgb&dl=pexels-veeterzy-303383.jpg&fm=jpg",
    },
    {
      id: 6,
      date: "Admin | August 15, 2023",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.",
      image:
        "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?cs=srgb&dl=pexels-veeterzy-303383.jpg&fm=jpg",
    },
  ];
  return (
    <div>
    {/* Banner Component */}
      <Banner
        title="Blogs"
        subtitle="Lorem ipsum dolor Lorem, ipsum."
        additionalText=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          tempore aspernatur?"
      />

      <div className="blog-container">
      {/* Product Mapping */}
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="blog-card"
            style={{ backgroundImage: `url(${blog.image})` }}
          >
            <div className="blog-content">
              <div className="blog-date">{blog.date}</div>
              <p>{blog.text}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
