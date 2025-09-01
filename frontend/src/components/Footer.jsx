import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        <div>
            <img src={assets.Logo1} className="mb-5 w-32" alt="Company Logo" />
            <p className="w-full md:w-2/3 text-gray-600">
  Our watch brand blends timeless craftsmanship with modern design, offering pieces that go beyond just telling time. Each watch is thoughtfully crafted to reflect elegance, precision, and individuality—perfect for every moment, from everyday wear to special occasions.
</p>

        </div>

        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li> <Link to="/" className="hover:text-black transition">
        Home
      </Link></li>
                <li> <Link to="/about" className="hover:text-black transition">
        About us
      </Link></li>
      <Link to="/orders">Delivery</Link>
                <li>  <Link to="/privacy-policy" className="hover:text-black transition">
        Privacy policy
      </Link></li>
            </ul>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+1-123-456-7890</li>
                <li>contact@rimberio.com</li>
            </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025@ rimberio.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer;
