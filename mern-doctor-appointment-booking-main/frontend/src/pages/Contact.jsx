import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
   return (
      <div className='mt-13 mb-20'>
         <p className='text-2xl text-gray-500 font-medium text-center'>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
         
         <div className='flex flex-col md:flex-row gap-3 items-center justify-center p-8 mt-9 mb-20'>
            <img className='w-full md:max-w-[450px] rounded' src={assets.contact_image} alt="" />
            <div className='flex flex-col px-8 gap-8'>
               <p className='text-xl font-semibold text-gray-600'>OUR OFFICE</p>
               <p className='text-gray-600 text-sm'>54709 Willms Station <br />
                  Suite 350, Washington, USA
               </p>
               <div className='flex flex-col gap-1'>
               <p className='text-gray-600 text-sm'>Tel: (415) 555‑0132</p>
               <p className='text-gray-600 text-sm'>Email: greatstackdev@gmail.com</p>
               </div>
               <div className='flex flex-col gap-2'>
                  <p className='text-lg font-semibold text-gray-600'>CAREERS AT PRESCRIPTO</p>
                  <p className='text-gray-600'>Learn more about our teams and job openings.</p>
               </div>
               <button className='p-6 py-3 text-sm w-fit border border-black cursor-pointer hover:text-white hover:bg-black transition-all duration-200'>Explore Jobs</button>
            </div>
         </div>
      </div>
   )
}

export default Contact