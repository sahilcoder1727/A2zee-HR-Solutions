import React from 'react'
import First from './First'

import Cards from './Cards'
import Thirdsec from './Thirdsec'
import WhatsApp_icon from "../assets/imgs/WhatsApp_icon.png";
import { Link } from 'react-router-dom';
function Services() {
  return (
    <div>
      <First/>
      <Cards/>
      <Thirdsec/>
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

export default Services