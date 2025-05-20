import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../assets/imgs/blog1.jpg";
import img2 from "../assets/imgs/blog2.jpg";
import img3 from "../assets/imgs/blog3.jpg";
import img4 from "../assets/imgs/blog4.jpg";
import img5 from "../assets/imgs/blog5.jpg";
import img6 from "../assets/imgs/blog6.jpeg";
import WhatsApp_icon from "../assets/imgs/WhatsApp_icon.png";

import First from './First';

// Define an array of blog post data
const blogPosts = [
  {
    title: "Effective Recruitment Strategies",
    description: "Attracting Top Talent to Your Organization",
    image: img1,
    path: "/blog1"
  },
  {
    title: "Enhancing Employee Engagement",
    description: "Strategies to Improve Employee Motivation",
    image: img2, // Replace with your actual image import
    path: "/blog2"
  },
  {
    title: "Performance Management Systems",
    description: "Enhancing Employee Development ",
    image: img3, // Replace with your actual image import
    path: "/blog3"
  },
  {
    title: "Workplace Diversity and Inclusion",
    description: " Building a Culture of Belonging",
    image: img4, // Replace with your actual image import
    path: "/blog4"
  },
  {
    title: "Employee Training and Development",
    description: " Investing in Your Team’s Success",
    image: img6, // Replace with your actual image import
    path: "/blog5"
  },
  {
    title: "HR Technology Trends",
    description: "Shaping the Future of Workforce Management",
    image: img5, // Replace with your actual image import
    path: "/blog6"
  },
  // Add more objects for additional blog posts as needed
];

const Blogs = () => {
  return (
    <div className="bg-white">
      {/* Banner Image */}
     <First/>

      {/* Blog Posts */}
      <div className='bg-cover bg-center bg-no-repeat bg-opacity-80'>
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-semibold text-center mb-8 text-primaryColor">Latest Blog Posts</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 lg:mx-0 mt-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:translate-y-2 duration-300 hover:shadow-2xl">
                <img src={post.image} alt={`Blog Post ${index + 1}`} className="w-full sm:h-64 h-48 object-cover object-center" />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-primaryColor mb-2">{post.title}</h2>
                  <p className="text-primaryColor mb-4">{post.description}</p>
                  <Link to={post.path}>
                    <button className='bg-[#F26248] px-2 py-2 rounded-lg mr-2 text-l tracking-widest border-solid border-2 border-primaryColor hover:bg-primaryColor hover:text-white'>
                      Read More <i className='fa-solid fa-arrow-right'></i>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 mr-3 mb-3 p-3 z-10 ">
        <Link
          to="https://wa.me/919785036734?text=Hello,"
          target="_blank"
        >
          <img src={WhatsApp_icon} width="60" alt="" />
        </Link>
      </div>
    </div>
    
  );
}

export default Blogs;
