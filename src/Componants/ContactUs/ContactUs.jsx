import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import WhatsApp_icon from "../assets/imgs/WhatsApp_icon.png";
import { Link } from "react-router-dom";

// import ButtonGrad from "../components/ButtonGrad";
import cont2 from "../assets/imgs/ContactImg.png";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [interestedIn, setInterstedIn] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    const SERVICE_ID = "service_cbbqxc2";
    const TEMPLATE_ID = "template_qelfnwh";
    const PUBLIC_KEY = "mpPQP5J7nYi1hCHfi";

    const templatesParams = {
      from_name: name,
      from_email: email,
      from_number: number,

      to_name: "A2ZEE HR Solutions Contact Form",
      message: message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templatesParams, PUBLIC_KEY)
      .then((response) => {
        // console.log("Thank you for Connecting with us!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });
  };

  return (
    <div className="h-[100%] light-bg pt-16">
      <div className="cont-form container-main">
        <h1 className="text-3xl text-center xl:text-5xl font-bold text-gray-800 z-10">
          Contact Us Now
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white md:p-12 p-6  border-cont-form flex justify-between lg:flex-row flex-col lg:gap-4 gap-12"
        >
          <div className="lg:w-1/2 ">
            {/* <h3 className="xl:text-3xl text-2xl mb-12">Let's Connect</h3> */}

            <div className="form-img bg-white  lg:h-[450px] mt-8 h-auto   flex justify-center align-middle items-center">
              <img
                src={cont2}
                alt="form_img "
                className="bg-white max-w-lg flex justify-center align-middle  "
              />
            </div>
            
          </div>
          <div className="lg:w-1/2 flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-lg xl:text-xl  font-semibold text-gray-800 mt-2"
            >
             <h1>Name <span className="text-red-600">*</span></h1> 
            </label>

            <div className="  w-full h-12  flex  ">
              <span className="p-4 flex items-center justify-center border border-y-1 border-l-1 border-gray-400  bg-gray-50 icons-border-cont ">
                <FaUser />
              </span>

              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-full md:w-2/3 w-full border border-1 border-gray-400   px-4 py-1 focus:outline-none inp-border-cont"
                placeholder="Enter Your Name..."
              />
              {name.length > 0 && !/^[a-zA-Z\s]*$/.test(name) && (
                <span className="text-red-500 text-sm">
                  Name must contain only alphabets and spaces.
                </span>
              )}
            </div>
            {/* {errors.name && <p className="text-red-600">{errors.name}</p>} */}

            <label
              htmlFor="email"
              className="text-lg xl:text-xl  font-semibold text-gray-800 mt-2"
            >
              <h1>Email <span className="text-red-600">*</span></h1>
            </label>

            <div className=" w-full h-12  flex    ">
              <span className="p-4 flex items-center justify-center border border-1  border-gray-400 bg-gray-50  icons-border-cont">
                <MdEmail />
              </span>

              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-full md:w-2/3 w-full border border-1 border-gray-400   px-4 py-1 focus:outline-none inp-border-cont"
                placeholder="Enter Your Email..."
              />
              {email.length > 0 && !/\S+@\S+\.\S+/.test(email) && (
                <span className="text-red-500 text-sm">
                  Invalid email format.
                </span>
              )}
            </div>
            {/* {errors.email && <p className="text-red-600">{errors.email}</p>} */}

            <label
              htmlFor="phone"
              className="text-lg xl:text-xl  font-semibold text-gray-800 mt-2"
            >
            <h1>  Phone <span className="text-red-600">*</span></h1>
            </label>

            <div className=" w-full h-12  flex   ">
              <span className="p-4 flex items-center justify-center bg-gray-50 border border-y-1 border-l-1 border-gray-400  icons-border-cont">
                <FaPhone className="" />
              </span>

              <input
                type="number"
                id="phone"
                pattern="[0-9]{10}"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
                className="h-full md:w-2/3 w-full border border-1 border-gray-400   px-4 py-1 focus:outline-none inp-border-cont"
                placeholder="Enter Your Mobile..."
              />
              {number.length > 0 && !/^[0-9]{10}$/.test(number) && (
                <span className="text-red-500 text-sm">
                  Phone number must be exactly 10 digits.
                </span>
              )}
            </div>
            {/* {errors.phone && <p className="text-red-600">{errors.phone}</p>} */}

            <label
              htmlFor="message"
              className="text-lg xl:text-xl  font-semibold text-gray-800 mt-2"
            >
            <h1> Message</h1>
            </label>

            <div className=" mb-4">
              <textarea
                name="message"
                id="message"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Enter Your Message..."
                className="xl:w-3/4 lg:w-4/5 w-full md:w-3/4 border border-1 border-gray-400 px-2"
              ></textarea>
            </div>

            <div className="">
              <button
                className="text-white bg-[#F26248] px-4 py-2 text-md rounded-xl border-2 border-primaryColor hover:bg-primaryColor hover:text-black"
                type="submit"
              >
               <h1> Submit{" "}
                <i className="fa fa-paper-plane pl-2" aria-hidden="true"></i></h1>
              </button>
            </div>
          </div>
        </form>
        <div className="flex md:justify-center space-x-4 justify-center mt-4 lg:mr-[600px] lg:mt-7">
              <section class="flex justify-center items-center">
                <button
                  href="/"
                  class="group flex justify-center p-2.5 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    stroke-width="0"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path>
                  </svg>
                  <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                    x
                  </span>
                </button>
              </section>

              <section class="flex justify-center items-center">
                <button
                  href="/"
                  class="group flex justify-center p-2.5 rounded-md drop-shadow-xl from-gray-800 bg-[#a21caf] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1.2em"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    fill="currentColor"
                    stroke="currentColor"
                    class="w-5"
                  >
                    <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                  </svg>
                  <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                    Instagram
                  </span>
                </button>
              </section>

              <section class="flex justify-center items-center">
                <button
                  href="/"
                  class="group flex justify-center p-2.5 rounded-md drop-shadow-xl bg-[#CD201F] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.1em"
                    height="1.1em"
                    viewBox="0 0 576 512"
                    stroke-width="0"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                  <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                    Youtube
                  </span>
                </button>
              </section>

              <section class="flex justify-center items-center">
              <a href='https://www.linkedin.com/company/a2zee-hr-solutions21/posts/?feedView=all'>
                <button
                  href="/https://www.linkedin.com/company/a2zee-hr-solutions21/posts/?feedView=all"
                  class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1.1em"
                    viewBox="0 0 512 512"
                    stroke-width="0"
                    fill="currentColor"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
                  </svg>
                  <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                    Linkedin
                  </span>
                </button>
                </a>
              </section>
            </div>
      </div>

      <hr className="w-full  bg-gray-800 mt-20" />
      <div className="py-16 px-4">
        <div className="container-main flex lg:flex-row flex-col gap-24 xl:gap-32  overflow-hidden">
          <div className="right-cont lg:ml-14 xl:w-2/3 lg:w-1/2 h-96 lg:h-[390px]  w-full  ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3557.7007398081146!2d75.73268737543953!3d26.912991076646957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDU0JzQ2LjgiTiA3NcKwNDQnMDYuOSJF!5e0!3m2!1sen!2sin!4v1710346770108!5m2!1sen!2sin"
              className="w-full map-cont h-full border-gray-500 border-2 rounded-xl"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="lg:w-1/2 w-full left-cont ">
            <h1 className="xl:text-3xl text-2xl mb-4 font-bold text-gray-900">
              Contact Us
            </h1>
            <h2 className="xl:text-4xl text-3xl mb-4 font-bold blue-light-text">
              We Serve You Best
            </h2>

            <div>
              <p className="text-base xl:text-xl mt-4  ">A2ZEE HR Solutions</p>
              <p className="text-base xl:text-xl  ">
                302 Rubi, Urbana Jewels, Mansarovar, Jaipur Pincode-302029
              </p>

              <p className="mt-4 text-lg xl:text-xl">
                Email Us:{" "}
                <span className="xl:text-lg text-base underline blue-light-text ml-2">
                  devishwari@a2zeehr.com
                </span>
              </p>
              <p className="mt-2 text-lg xl:text-xl">
                Call Us:{" "}
                <span className="xl:text-lg text-base underline blue-light-text ml-2">
                  +91 9785036734
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 mr-3 mb-3 p-3 z-10 ">
        <Link to="https://wa.me/919785036734?text=Hello," target="_blank">
          <img src={WhatsApp_icon} width="60" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
