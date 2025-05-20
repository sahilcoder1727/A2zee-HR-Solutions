import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
 import Logo from "../assets/Logo/logo.png";

// import Aboutus from "../About/Aboutus.jsx";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", display: "Home" },
    { path: "/aboutus", display: "Case Studies" },
    { path: "/services", display: "Services" },
    { path: '/blogs', display: 'Blogs' },
    { path: '/contactus', display: 'Contact us' },
    { path: '/career', display: 'Career' },
    { path: '/gallery', display: 'Gallery' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md   justify-between sticky top-0 z-50 h-28 main-nav">
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center  py-0">
            <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className=" object-cover  cursor-pointer"
            />
            </Link>
          </div>
          <div className="md:flex hidden ">
            <ul className="menu flex items-center font-bold gap-[2.7rem]  ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block ${isActive ? "text-[#F26248]" : "text-black"} `
                  }
                >
                 <h1> Home</h1>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  className={({ isActive }) =>
                    `block ${isActive ? "text-[#F26248]" : "text-black"} `
                  }
                >
               <h1>  About us </h1>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `block ${isActive ? "text-[#F26248]" : "text-black"} `
                  }
                >
                 <h1> Services</h1>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    `block ${isActive ? "text-[#F26248]" : "text-black"} `
                  }
                >
               <h1>Blogs</h1>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/career"
                  className={({ isActive }) =>
                    `block ${isActive ? "text-[#F26248]" : "text-black"} `
                  }
                >
                 <h1> Career </h1>
                 </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    `block ${isActive ? "text-[#F26248]" : "text-black"} `
                  }
                >
                 Gallery
                </NavLink>
              </li> */}
            </ul>
           
      
          <div className="  flex mr-14 ">
                <NavLink to="/contactus">
                  <button className="bg-[#F26248] px-3 py-2 ml-28 test-md  rounded-full border-2 border-primaryColor hover:bg-primaryColor hover:text-white" >
                   <h1> Contact Us <i className="fa-solid fa-arrow-right"></i></h1>
                  </button>
                </NavLink>
              </div>
        
              </div>
    
          <div className="lg:hidden text-primaryColor mt-8">
            <i
              className="fa-solid fa-bars fa-2xl w-10 h-10 cursor-pointer "
              onClick={toggleMenu}
            ></i>
          </div>
      </div>
        {/* Responsive Mobile Menu */}
        <div
          className={` fixed top-0 right-0 h-full rounded-xl bg-white  w-full transform transition-transform duration-3000 ${
            isOpen ? "-translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col items-center font-bold  justify-center h-full ">
            <ul className="gap-x-16 space-y-4 transition-transform duration-1000 ease-in-out -translate-y-0">
              <li className="flex  ">
                <NavLink
                  to="/"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block ${isActive ? "text-[#F26248]" : "text-black"}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block ${isActive ? "text-[#F26248]" : "text-black"} `
                  }
                >
                 About us 
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block ${isActive ? "text-[#F26248]" : "text-black"}`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block ${isActive ? "text-[#F26248]" : "text-black"} `
                  }
                >
                Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/career"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block ${isActive ? "text-[#F26248]" : "text-black"}`
                  }
                >
                  Career 
                       </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/gallery"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block ${isActive ? "text-[#F26248]" : "text-black"}`
                  }
                >
                 Gallery
                </NavLink>
              </li> */}
          </ul>
            <div className="flex items-center  mt-4 gap-4">
            <div className=" md:block flex">
                <NavLink to="/contactus">
                  <button className="bg-[#F26248] px-3 py-2  test-md  rounded-full border-2 border-primaryColor hover:bg-primaryColor hover:text-white"  onClick={toggleMenu}>
                    Contact Us <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </NavLink>
              </div>
            </div>
            <button
              className="text-primaryColor absolute top-4 right-4"
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-xmark fa-2xl  w-8 h-8"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
