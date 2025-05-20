import React, { useState } from 'react';
import { FaUser, FaUpload } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com'; // Import emailjs-com instead of @emailjs/browser
import { Link } from 'react-router-dom';
import cont2 from '../assets/imgs/CareerImg.png';
import Second from './Second';
import WhatsApp_icon from '../assets/imgs/WhatsApp_icon.png';
import GooglePicker from 'react-google-picker';
const Career = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');
  const [resume, setResume] = useState(null);
  const [interestedIn, setInterestedIn] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = 'service_cbbqxc2'; // Replace with your EmailJS service ID
    const TEMPLATE_ID = 'template_y9ghfe5'; // Replace with your EmailJS template ID
    const PUBLIC_KEY = 'mpPQP5J7nYi1hCHfi'; // Replace with your EmailJS user ID
    
    const templateParams = {
      from_name: name,
      from_email: email,
      from_number: number,
      from_interestedIn: interestedIn,
      to_name: 'Invest in Franchise-Contact Form',
      message: message,
      resume_url: resume ? resume.url : '', // Include resume URL in email template
    };

    // Send form data using emailjs
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
        setNumber('');
        setResume(null);
        setInterestedIn('');
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  // Function to handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume({ name: file.name, url: URL.createObjectURL(file) });
    }
  };

  return (
    <div className='py-8'>
      <div className='cont-form container-main'>
        <h1 className='text-3xl text-center xl:text-5xl font-bold text-gray-800'>
          Join Us Now
        </h1>

        <form
          onSubmit={handleSubmit}
          className='bg-white md:p-12 p-6  border-cont-form flex justify-between lg:flex-row flex-col lg:gap-4 gap-12'
        >
          <div className='lg:w-1/2'>
            <div className='form-img bg-white cont-img lg:h-[390px] mt-'>
              <img
                src={cont2}
                alt='form_img'
                className='bg-white mx-auto lg:mt-4 lg:h-[500px] '
              />
            </div>
          </div>
          <div className='lg:w-1/2 flex flex-col gap-1'>
            <label
              htmlFor='name'
              className='text-lg xl:text-xl font-semibold text-gray-800 '
            >
             <h1> Name <span className='text-red-600'>*</span></h1>
            </label>
            <div className='w-full h-12 flex'>
              <span className='p-4 flex items-center justify-center border border-y-1 border-l-1 border-gray-400 bg-gray-50 icons-border-cont'>
                <FaUser />
              </span>
              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className='h-full md:w-2/3 w-full border border-1 border-gray-400 px-4 py-1 focus:outline-none inp-border-cont'
                placeholder='Enter Your Name...'
              />
              {name.length > 0 && !/^[a-zA-Z\s]*$/.test(name) && (
                <span className='text-red-500 text-sm'>
                  Name must contain only alphabets and spaces.
                </span>
              )}
            </div>

            <label
              htmlFor='email'
              className='text-lg xl:text-xl font-semibold text-gray-800 mt-2'
            >
             <h1>Email <span className='text-red-600'>*</span></h1> 
            </label>
            <div className='w-full h-12 flex'>
              <span className='p-4 flex items-center justify-center border border-1 border-gray-400 bg-gray-50 icons-border-cont'>
                <MdEmail />
              </span>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='h-full md:w-2/3 w-full border border-1 border-gray-400 px-4 py-1 focus:outline-none inp-border-cont'
                placeholder='Enter Your Email...'
              />
              {email.length > 0 && !/\S+@\S+\.\S+/.test(email) && (
                <span className='text-red-500 text-sm'>
                  Invalid email format.
                </span>
              )}
            </div>

            <label
              htmlFor='phone'
              className='text-lg xl:text-xl font-semibold text-gray-800  mt-2'
            >
             <h1> Phone <span className='text-red-600'>*</span></h1>
            </label>
            <div className='w-full h-12 flex'>
              <span className='p-4 flex items-center justify-center bg-gray-50 border border-y-1 border-l-1 border-gray-400 icons-border-cont'>
                <FaPhone />
              </span>
              <input
                type='number'
                id='phone'
                pattern='[0-9]{10}'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
                className='h-full md:w-2/3 w-full border border-1 border-gray-400 px-4 py-1 focus:outline-none inp-border-cont'
                placeholder='Enter Your Mobile...'
              />
              {number.length > 0 && !/^[0-9]{10}$/.test(number) && (
                <span className='text-red-500 text-sm'>
                  Phone number must be exactly 10 digits.
                </span>
              )}
            </div>

            <label
              htmlFor='experience'
              className='text-lg xl:text-xl font-semibold text-gray-800 mt-2'
            >
             <h1>Years of Experience</h1> 
            </label>
            <div className=''>
              <textarea
                name='message'
                id='message'
                rows='1'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder='Enter Your Experience...'
                className='xl:w-3/4 py-2 lg:w-4/5 w-full md:w-3/4 border border-1 border-gray-400 px-2'
              ></textarea>
            </div>

            <label
              htmlFor='interestedIn'
              className='text-lg xl:text-xl font-semibold text-gray-800 mt-2'
            >
              <h1>Interested In</h1>
            </label>
            <div className=''>
              <textarea
                name='interestedIn'
                id='interestedIn'
                rows='1'
                value={interestedIn}
                onChange={(e) => setInterestedIn(e.target.value)}
                required
                placeholder='Ex: Domain, Job role, etc.'
                className='xl:w-3/4 py-2 lg:w-4/5 w-full md:w-3/4 border border-1 border-gray-400 px-2'
              ></textarea>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='resume'
                className='text-lg xl:text-xl font-semibold text-gray-800'
              >
                <h1>Resume</h1>
              </label>
              <div className='flex justify-center items-center flex-col mt-4 p-6 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:bg-gray-100'>
              {/* <GooglePicker
                  clientId='902408686751-m5e8fd44il5u218kht5jm9s5mpjklt28.apps.googleusercontent.com'
                  developerKey='AIzaSyCvPUzOQJaAdEENOBwEOfSMvTrusHDJwwY'
                  scope={['https://www.googleapis.com/auth/drive.readonly']}
                  onChange={(data) => handleFileChange(data)}
                > */}

                <div>
                  <a href='https://drive.google.com/drive/folders/1iCzkS0xs32hUrG1Ty5OBqfzLhRlUttPI?usp=sharing'>
                  <span className='flex flex-col items-center'>
                    <FaUpload className='text-5xl text-black' />
                    <h1><span className='mt-2 text-lg text-gray-600'>
                      Select from Google Drive
                    </span></h1>
                    </span>
                    </a>
                  </div>
          
                {resume && (
                  <p className='mt-2 text-sm text-gray-600'>
                    Selected file: {resume.name}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                className='text-white bg-[#F26248] px-4 py-2 text-md rounded-xl border-2 border-primaryColor hover:bg-primaryColor hover:text-black'
                type='submit'
              >
                Submit{' '}
                <i className='fa fa-paper-plane pl-2' aria-hidden='true'></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <Second />
      <div className='fixed bottom-0 right-0 mr-3 mb-3 p-3 z-10 '>
        <Link to='https://wa.me/919785036734?text=Hello,' target='_blank'>
          <img src={WhatsApp_icon} width='60' alt='' />
        </Link>
      </div>
    </div>
  );
};

export default Career;







// const SERVICE_ID = 'service_cbbqxc2'; // Replace with your EmailJS service ID
//     const TEMPLATE_ID = 'template_y9ghfe5'; // Replace with your EmailJS template ID
//     const PUBLIC_KEY = 'mpPQP5J7nYi1hCHfi'; // Replace with your EmailJS user ID