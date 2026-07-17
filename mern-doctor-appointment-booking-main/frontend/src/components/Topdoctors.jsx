import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/Context'

const Topdoctors = () => {

   const navigate = useNavigate()

   const {doctors} = useContext(AppContext)

  return (
    <div className='text-center'>
      <p className='text-3xl font-medium'>Top Doctors to Book </p>
      <p className='text-gray-500 text-base mt-4 w-2/3 mx-auto px-36'>Simply browse through our extensive list of trusted doctors.</p>

      <div className='mt-16 flex flex-wrap gap-6'>
         {
            doctors.slice(0,10).map((item,index) => (
               <div onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} key={index} className='flex flex-col border w-[223px] border-gray-300 rounded-md hover:-translate-y-1.5 transition-all duration-300 cursor-pointer'>
                  <img className='bg-[var(--secondry)] w-full' src={item.image} alt="" />
                  <div className='p-4 flex flex-col items-start'>
                     <div className='flex gap-2 my-1 items-center'>
                     <p className='w-2 h-2 bg-green-600 rounded-full'></p>
                     <p className='text-green-600 text-sm'>Available</p>
                  </div>
                  <p className='text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-500'>{item.speciality}</p>
                  </div>
               </div>
            ))
         }
      </div>

      <button onClick={() => {navigate('/doctors') ; scrollTo(0,0)}} className='px-18 py-3 bg-[var(--secondry)] text-[var(--primary)] my-8 rounded-full cursor-pointer hover:text-white hover:bg-[var(--primary)]'>More</button>
    </div>
  )
}

export default Topdoctors