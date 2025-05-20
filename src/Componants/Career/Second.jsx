import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo/logo.png";
import b1 from "../assets/imgs/CareerVactor2.png";

function Second() {
  return (
    <div className="pt-8">
      <h1 className='text-3xl font-bold text-center'>What Sets Us Apart?</h1>
      <div className="relative mb-4">
        <img
          src={b1}
          alt="Blog Banner"
          className="w-full h-auto "
        />
      </div>
    </div>
  )
}

export default Second
