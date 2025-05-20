import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Componants/Home/Home.jsx'
import Layout from './Componants/Layout/Layout.jsx'
import ContactUs from './Componants/ContactUs/ContactUs.jsx'
import AboutUs from './Componants/AboutUs/AboutUs.jsx'
import Blogs from './Componants/Blogs/Blogs.jsx'
import Services from './Componants/Services/Services.jsx'
import Career from './Componants/Career/Career.jsx'
import Module1 from './Componants/Module/Module1.jsx'
import Gallery from './Componants/Gallery/Gallery.jsx'
import Blog1 from './Componants/Blogs/Blog1.jsx'
import Blog2 from './Componants/Blogs/Blog2.jsx'
import Blog3 from './Componants/Blogs/Blog3.jsx'
import Blog4 from './Componants/Blogs/Blog4.jsx'
import Blog5 from './Componants/Blogs/Blog5.jsx'
import Blog6 from './Componants/Blogs/Blog6.jsx'
import PrivacyPolicy from './Componants/PrivacyPolicy/PrivacyPolicy.jsx'
import TermsAndConditions from './Componants/Term&conditions/TermsAndConditions.jsx'

const router=createBrowserRouter([{
  path:'/',
  element: <Layout/>,
  children:[
    {
      path:"",
      element:<Home/>
    },
    {
      path:"contactus",
      element:<ContactUs/>
    },
    {
      path:"aboutus",
      element:<AboutUs/>
    },
    {
      path:"blogs",
      element:<Blogs/>
    },
    {
      path:"services",
      element:<Services/>
    },
    {
      path:"career",
      element:<Career/>
    },
    {
      path:"module1",
      element:<Module1/>
    },
    {
      path:"gallery",
      element:<Gallery/>
    },
    {
      path:"blog1",
      element:<Blog1/>
    },
    {
      path:"blog2",
      element:<Blog2/>
    },
    {
      path:"blog3",
      element:<Blog3/>
    },
    {
      path:"blog4",
      element:<Blog4/>
    },
    {
      path:"blog5",
      element:<Blog5/>
    },
    {
      path:"blog6",
      element:<Blog6/>
    },
    {
      path:"privacypolicy",
      element:<PrivacyPolicy/>
    },
    {
      path:"termsandconditions",
      element:<TermsAndConditions/>
    },
    
  ]}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
