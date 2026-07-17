import React from 'react'
import { specialityData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Speciality = () => {

   const navigate = useNavigate()

  return (
    <div className='mt-16 text-center mb-16'>
      <p className='text-3xl font-medium'>Find by Speciality </p>
      <p className='text-gray-500 text-base mt-4 w-2/3 mx-auto px-36'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>

      <div className='flex flex-wrap gap-8 mt-16 justify-center items-center'>
         {
          specialityData.map((item,index) => (
            <div onClick={() => {navigate(`/doctors/${item.speciality}`); scrollTo(0,0)}} className='flex flex-col items-center gap-4 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer' key={index}>
               <img className='w-26' src={item.image} alt="" />
               <p className='text-base text-gray-600'>{item.speciality}</p>
            </div>
          ))  
         }
      </div>
    </div>
  )
}

export default Speciality