import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
   return (
      <div className='my-16 mb-20'>
         <div>
            <p className='text-2xl text-gray-500 font-medium text-center'>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>

            <div className='flex flex-col md:flex-row items-center mt-10 gap-9'>
               <img className='w-full md:max-w-[400px] rounded' src={assets.about_image} alt="" />
               <div className='flex flex-col gap-7 pl-5 pr-7 leading-7'>
                  <p className='text-gray-600'>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
                  <p className='text-gray-600'>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
                  <b>Our Vision</b>
                  <p className='text-gray-600'>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
               </div>
            </div>
         </div>

         <div className='mt-20'>
            <p className='text-xl text-gray-500 font-medium mb-10'>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
            <div className='flex flex-col md:flex-row'>
               <div className='flex flex-col p-14 pb-16 gap-3 border text-gray-500 border-gray-400 border-r-0 hover:bg-[var(--primary)] hover:text-white cursor-pointer'>
                  <p className='font-semibold text-lg'>EFFICIENCY:</p>
                  <p className=''>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
               </div>

               <div className='flex flex-col p-14 pb-16 gap-3 text-gray-500 border border-gray-400 border-r-0 hover:bg-[var(--primary)] hover:text-white cursor-pointer'>
                  <p className='font-semibold text-lg'>COVENIENCE:</p>
                  <p className=''>Access to a network of trusted healthcare professionals in your area.</p>
               </div>

               <div className='flex flex-col p-14 pb-16 text-gray-500 gap-3 border border-gray-400 hover:bg-[var(--primary)] hover:text-white cursor-pointer'>
                  <p className='font-semibold text-lg'>PERSONALIZATION:</p>
                  <p className=''>Tailored recommendations and reminders to help you stay on top of your health.</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About