import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/Context'


const Doctors = () => {

   const {speciality} = useParams()
   const {doctors} = useContext(AppContext)

   
   const doctorFilter = () => {
      let Docfilter = []
      if(speciality) {
          Docfilter = doctors.filter(doc => doc.speciality === speciality)
      } else {
         Docfilter = doctors
      }
      return Docfilter
   }

   useEffect(() => {
      doctorFilter()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[doctors, speciality])
   const navigate = useNavigate()

  return (
    <div className='my-12 mb-24'>
      <p className='text-gray-600 '>Browse through the doctors specialist.</p>
      <div className='flex flex-col md:flex-row gap-5 mt-8'>
         <div className='flex flex-col gap-3'>
            <p onClick={() => {navigate(`${speciality === 'General physician' ?  '/doctors' : '/doctors/General physician'}`)}} className={`border border-gray-300 py-2 pl-4 w-[200px] rounded-lg text-gray-500 cursor-pointer ${speciality === 'General physician' ? 'bg-[var(--secondry)]/60 text-gary-700' : ''}`}>General physician</p>
            <p onClick={() => {navigate(`${speciality === 'Gynecologist' ?  '/doctors' : '/doctors/Gynecologist'}`)}} className={`border border-gray-300 py-2 pl-4 w-[200px] rounded-lg text-gray-500 cursor-pointer ${speciality === 'Gynecologist' ? 'bg-[var(--secondry)]/60 text-gary-700' : ''}`}>Gynecologist</p>
            <p onClick={() => {navigate(`${speciality === 'Dermatologist' ?  '/doctors' : '/doctors/Dermatologist'}`)}} className={`border border-gray-300 py-2 pl-4 w-[200px] rounded-lg text-gray-500 cursor-pointer ${speciality === 'Dermatologist' ? 'bg-[var(--secondry)]/60 text-gary-700' : ''}`}>Dermatologist</p>
            <p onClick={() => {navigate(`${speciality === 'Pediatricians' ?  '/doctors' : '/doctors/Pediatricians'}`)}} className={`border border-gray-300 py-2 pl-4 w-[200px] rounded-lg text-gray-500 cursor-pointe ${speciality === 'Pediatricians' ? 'bg-[var(--secondry)]/60 text-gary-700' : ''}`}>Pediatricians</p>
            <p onClick={() => {navigate(`${speciality === 'Neurologist' ?  '/doctors' : '/doctors/Neurologist'}`)}} className={`border border-gray-300 py-2 pl-4 w-[200px] rounded-lg text-gray-500 cursor-pointer ${speciality === 'Neurologist' ? 'bg-[var(--secondry)]/60 text-gary-700' : ''}`}>Neurologist</p>
            <p onClick={() => {navigate(`${speciality === 'Gastroenterologist' ?  '/doctors' : '/doctors/Gastroenterologist'}`)}} className={`border border-gray-300 py-2 pl-4 w-[200px] rounded-lg text-gray-500 cursor-pointer ${speciality === 'Gastroenterologist' ? 'bg-[var(--secondry)]/60 text-gary-700' : ''}`}>Gastroenterologist</p>
         </div>

         <div className='flex flex-row gap-3 flex-1 flex-wrap'>
            {
               doctorFilter().map((item,index) => (
               <div onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} key={index} className='flex flex-col border w-[223px] border-gray-300 rounded-md hover:-translate-y-1.5 transition-all duration-300 cursor-pointer'>
                  <img className='bg-[var(--secondry)]/30 w-full' src={item.image} alt="" />
                  <div className='pl-4 flex flex-col items-start'>
                     <div className='flex my-1 gap-2 items-center'>
                        <p className='w-2 h-2 bg-green-600 rounded-full'></p>
                        <p className='text-green-600 text-sm'>Available</p>
                     </div>
                  <p className='text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-xs mb-2'>{item.speciality}</p>
                  </div>
               </div>
            ))
            }
         </div>
      </div>
    </div>
  )
}

export default Doctors