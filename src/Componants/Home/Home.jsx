import React from 'react'
import HeroCarausal from './HeroCarausal.jsx'
import Cards from './Cards.jsx'
import Thirdsec from './Thirdsec.jsx'
import Testimonial from './Testimonial.jsx'
import ForthSec from './FothSec.jsx'
import FifthSec from './Fifthsec.jsx'
import WhatsApp_icon from "../assets/imgs/WhatsApp_icon.png";
import { Link } from 'react-router-dom'
import OurPartners from './OurPartners.jsx'
function Home() {
  return (
    <div>
      <HeroCarausal/>
      <Cards/>
      <Thirdsec/>
      <Testimonial/>
      <OurPartners />
      <ForthSec/>
      <FifthSec/>
      <div className="fixed bottom-0 right-0 mr-3 mb-3 p-3 z-10 ">
        <Link
          to="https://wa.me/919785036734?text=Hello,"
          target="_blank"
        >
          <img src={WhatsApp_icon} width="60" alt="" />
        </Link>
      </div>
    </div>
  )
}

export default Home