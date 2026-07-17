import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const Bookappointment = () => {

   const navigate = useNavigate()

  return (
    <div className='pl-16 pr-18 flex justify-between rounded-md bg-[var(--primary)] text-white mb-18'>
      <div className='w-3/5 flex flex-col gap-8 py-24 items-start'>
         <p className='text-5xl font-bold leading-20'>Book Appointment <br />
            With 100+ Trusted Doctors
         </p>   
         <button onClick={() => navigate('/login')} className='bg-white text-black px-16 py-4 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer'>Create account</button>
      </div> 
      <div className='w-2/5 relative'>
         <img src={assets.appointment_img} alt="" className='hidden sm:block w-full right-0 absolute bottom-0'/>  
      </div>
    </div>
  )
}

export default Bookappointment