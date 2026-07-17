import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

   const navigate = useNavigate()

  return (
    <div className='flex mt-8 flex-col md:flex-row  gap-4 bg-[var(--primary)] rounded-md text-white relative pt-10'>
      <div className='sm:w-full md:w-1/2 px-4 py-16 md:px-16 md:flex flex-col gap-5 '>
         <p className='text-2xl md:text-3xl lg:text-5xl font-semibold leading-16'>Book Appointment <br />
            With Trusted Doctors
         </p>
         
         <div className='flex items-center justify-center gap-2'>
            <img className='w-24' src={assets.group_profiles} alt="" />
            <p className='text-sm leading-normal'>Simply browse through our extensive list of trusted doctors, 
               schedule your appointment hassle-free.</p>
         </div>
         <button onClick={() => navigate('/doctors')} className='bg-white w-fit text-black flex items-center justify-center font-medium px-6 py-2 gap-2 rounded-full hover:scale-105 transition-all duration-200 cursor-pointer'>Book appointment <img src={assets.arrow_icon} alt="" /></button>
      </div>
      <div className='w-full px:4 md:w-1/2 md:px-16'>
         <img className='w-full' src={assets.header_img} alt="" />
      </div>
      
    </div>
  )
}

export default Hero