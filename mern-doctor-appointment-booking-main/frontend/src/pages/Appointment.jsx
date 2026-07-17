import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContext } from '../context/Context'

const Appointment = () => {

   const navigate = useNavigate()
   const {doctors} = useContext(AppContext)

   const { docId } = useParams()

   const docData = doctors.find(doc => doc._id === docId)

   const sameSpecialityDoc = () => {
      const otherDocs = doctors.filter(doc => doc.speciality === docData.speciality && doc._id != docData._id)
      return otherDocs
   }

   useEffect(() => {
      sameSpecialityDoc()
   }, [docId, doctors, docData])


   return (
      <div className='mt-12 mb-20'>
         <div className='flex flex-col md:flex-row gap-8 py-8'>
            <img className='w-full md:max-w-[300px] bg-[var(--primary)] rounded-lg' src={docData.image} alt="" />

            <div className='flex flex-col justify-center gap-1.5 border border-gray-500 px-8 rounded-lg'>
               <p className='text-3xl font-semibold text-gray-700 flex gap-3 items-center'>{docData.name} <img src={assets.verified_icon} className='w-5' alt="" /></p>
               <p className='text-gray-600 flex gap-3'>{docData.degree} - {docData.speciality} <span className='px-2 py-0.5 border border-gray-500 rounded-full text-sm cursor-pointer'>{docData.experience}</span></p>
               <p className='font-medium flex items-center gap-2 mt-2 text-sm'>About <img className='w-3 h-3' src={assets.info_icon} alt="" /></p>
               <p className='text-gray-500 text-sm'>{docData.about}</p>
               <p className='text-gray-500 text-lg font-medium mt-4'>Appointment fee: <span className='text-gray-700 font-medium'> ${docData.fees}</span></p>
            </div>
         </div>


         <div>
            <p className='text-3xl font-medium text-center mt-10'>Related Doctors</p>
            <p className='text-gray-500 text-center mb-7'>Simply browse through our extensive list of trusted doctors.</p>
            <div className='flex flex-row gap-3 flex-1 flex-wrap'>
               {
                  sameSpecialityDoc().map((item, index) => (
                     <div onClick={() => navigate(`/appointment/${item._id}`)} key={index} className='flex flex-col border w-[223px] border-gray-300 rounded-md hover:-translate-y-1.5 transition-all duration-300 cursor-pointer'>
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
            <div className='flex items-center justify-center'>
               <button onClick={() => { navigate(`/doctors/${docData.speciality}`) }} className='mt-12 px-12 py-3 bg-[var(--primary)] text-white rounded-full font-medium text-sm text-center cursor-pointer hover:bg-[var(--primary)]/90'>ALL DOCTORS</button>
            </div>
         </div>
      </div>
   )
}

export default Appointment