import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {

   const navigate = useNavigate()

   return (
      <div>
         <div className='flex flex-col gap-4 items-start md:grid grid-cols-[3fr_1fr_1fr] md:gap-10 mb-8'>
            <div>
               <img className='w-44 mb-5' src={assets.logo} alt="" />
               <p className='w-[500px] text-gray-600 text-sm leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
            <div >
               <p className='text-lg font-medium mb-5 border-b border-gray-300 md:border-none w-full'>COMPANY</p>
               <div className='flex flex-col gap-2 '>
                  <p onClick={() => {navigate('/')}} className='text-gray-600 hover:text-gray-900 cursor-pointer'>Home</p>
                  <p onClick={() => {navigate('/about')}} className='text-gray-600 hover:text-gray-900 cursor-pointer'>About us</p>
                  <p onClick={() => {navigate('/contact')}} className='text-gray-600 hover:text-gray-900 cursor-pointer'>Contact us</p>
                  <p  className='text-gray-600 hover:text-gray-900 cursor-pointer'>Privacy policy</p>
               </div>
            </div>
            <div>
               <p className='text-lg font-medium mb-5 border-b border-gray-300 md:border-none w-full'>GET IN TOUCH</p>
               <div className='flex flex-col gap-3'>
                  <p className='text-gray-500 hover:text-neutral-800 cursor-pointer'>+1-212-456-7890</p>
                  <p className='text-gray-500 hover:text-neutral-800 cursor-pointer'>greatstackdev@gmail.com</p>
               </div>
            </div>
         </div>
         <hr className='h-[1px] border-none outline-none bg-gray-400'/>
         <p className='my-4 text-gray-500 text-center'>Copyright © 2024 GreatStack - All Right Reserved.</p>
      </div>
   )
}

export default Footer