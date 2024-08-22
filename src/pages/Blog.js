// import React from "react";
// import "../Styles/Blog.css";
// import Banner from "../components/Banner";


// function Blog() {
//   const blogData = [
//     {
//       id: 1,
//       date: "Admin | August 15, 2023",
//       text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.",
//       image:
//         "https://img.freepik.com/premium-photo/laptop-notebook-desk_1048944-30522547.jpg?size=626&ext=jpg&ga=GA1.1.1730006803.1721025434&semt=ais_user",
//     },
//     {
//       id: 2,
//       date: "Admin | August 15, 2023",
//       text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.",
//       image:
//         "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?cs=srgb&dl=pexels-veeterzy-303383.jpg&fm=jpg",
//     },
//     {
//       id: 3,
//       date: "Admin | August 15, 2023",
//       text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.",
//       image:
//         "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?cs=srgb&dl=pexels-veeterzy-303383.jpg&fm=jpg",
//     },
//     {
//       id: 4,
//       date: "Admin | August 15, 2023",
//       text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.",
//       image:
//         "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?cs=srgb&dl=pexels-veeterzy-303383.jpg&fm=jpg",
//     },
//     {
//       id: 5,
//       date: "Admin | August 15, 2023",
//       text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.",
//       image:
//         "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?cs=srgb&dl=pexels-veeterzy-303383.jpg&fm=jpg",
//     },
//     {
//       id: 6,
//       date: "Admin | August 15, 2023",
//       text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.",
//       image:
//         "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?cs=srgb&dl=pexels-veeterzy-303383.jpg&fm=jpg",
//     },
//   ];
//   return (
//     <div>
//     {/* Banner Component */}
//       <Banner
//         title="Blogs"
//         subtitle="Lorem ipsum dolor Lorem, ipsum."
//         additionalText=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
//           tempore aspernatur?"
//       />

//       <div className="blog-container">
//       {/* Product Mapping */}
//         {blogData.map((blog) => (
//           <div
//             key={blog.id}
//             className="blog-card"
//             style={{ backgroundImage: `url(${blog.image})` }}
//           >
//             <div className="blog-content">
//               <div className="blog-date">{blog.date}</div>
//               <p>{blog.text}</p>
//               <button className="read-more">Read More</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Blog;



import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Banner from "../components/Banner";
import "../Styles/Blog.css";

function truncateTitle(title, limit = 20) {
  const words = title.split(' ');
  if (words.length > limit) {
    return words.slice(0, limit).join(' ') + '...';
  }
  return title;
}

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("your-api-link"); // Replace with your API endpoint
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the blog data:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(blogs.length / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Banner
        title="Blogs"
        subtitle="Lorem ipsum dolor Lorem, ipsum."
        additionalText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          tempore aspernatur?"
      />

      <div className="blog-container">
        {currentBlogs.map((blog) => (
          <motion.div
            className="blog-card" // Ensure this class is defined in Blog.css
            key={blog._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeIn" }}
            style={{ backgroundImage: `url(${blog.image})` }} // Assuming blog.image contains the image URL
          >
            <div className="blog-content">
              <div className="blog-date">
                {new Date(blog.createdAt).getDate()} {new Date(blog.createdAt).toLocaleString('default', { month: 'short' })}
              </div>
              <h2>{truncateTitle(blog.title)}</h2>
              <p>{blog.content}</p>
              <div>{blog.comments ? blog.comments.length : 0} Comments</div>
              <button className="read-more">Read More</button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pagination">
        {pageNumbers.map((number) => (
          <motion.button
            key={number}
            onClick={() => paginate(number)}
            className={`page-link ${number === currentPage ? 'active' : ''}`}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {number}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default Blog;
