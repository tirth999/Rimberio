import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title';


const OurPolicy = () => {
  return (   <div className="my-10">
      <div className="text-center text-3xl py-8">
  <Title text1={'PRIVACY'} text2={'POLICY'} />
  <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
    We value your privacy. All personal information collected on our platform is securely stored and used solely to enhance your shopping experience. Your data is never shared or sold to third parties.
  </p>
</div>
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
    
  

       
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Easy Exchange Policy</p>
        <p className=' text-gray-400'>We offer hassle free  exchange policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>7 Days Return Policy</p>
        <p className=' text-gray-400'>We provide 7 days free return policy</p>
      </div>
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Best customer support</p>
        <p className=' text-gray-400'>we provide 24/7 customer support</p>
      </div>

    </div>
    </div>
  )
}

export default OurPolicy
