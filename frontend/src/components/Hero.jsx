import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center bg-[#f9f9f9] rounded-2xl shadow-lg overflow-hidden">
      
      {/* Left Section - Text Content */}
      <div className="w-full sm:w-1/2 p-10 sm:p-14 text-center sm:text-left space-y-6">
        <p className="text-sm text-gray-500 uppercase tracking-widest">New Collection</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Timeless Craftsmanship,
          <br />
          Bold Design.
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Elevate your style with our signature line of watches — where modern design meets legendary precision.
        </p>
        <div className="mt-4">
  <Link to="/collection">
    <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300">
      Explore Now
    </button>
  </Link>
</div>

      </div>

      {/* Right Section - Image */}
      <div className="w-full sm:w-1/2">
        <img
          src={assets.hero_img1}
          alt="Luxury Watch"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero
