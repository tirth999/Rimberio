import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img1} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>TimeVerse was founded with a passion for precision and a love for timeless style. Our journey began with a commitment to bring premium, stylish watches to modern customers who appreciate both elegance and functionality.</p>
              <p>From sleek minimalist designs to classic chronographs, we curate a collection of watches that suit every wrist and every occasion. Each piece is handpicked for its craftsmanship, durability, and statement-worthy design.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission at TimeVerse is to offer more than just timepieces — we aim to deliver a sense of identity and sophistication to your everyday lifestyle. We’re dedicated to offering a seamless shopping experience paired with exceptional customer service.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Premium Craftsmanship:</b>
            <p className=' text-gray-600'>Every watch is built to last — crafted with high-grade materials and attention to detail that stands the test of time.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Effortless Shopping:</b>
            <p className=' text-gray-600'>With a clean interface and easy navigation, finding your perfect watch is just a few clicks away.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Trusted Customer Support:</b>
            <p className=' text-gray-600'>Our support team is ready to assist you before, during, and after your purchase. Your satisfaction is our success.</p>
          </div>
      </div>

    </div>
  )
}

export default About
