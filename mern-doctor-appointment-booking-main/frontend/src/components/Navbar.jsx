import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/Context'

const Navbar = () => {

   const navigate = useNavigate()
   const {isLogin, setIsLogin} = useContext(AppContext)
   const [open, setOpen] = useState(false)

   const [isShowMenu, setIsShowMenu] = useState(false)
   return (
      <div>
         <div className='flex items-center justify-between py-4 border-b border-gray-400'>
            <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-4 items-start'>
               <NavLink to='/'>
                  <li className='py-1 text-sm font-medium'>HOME</li>
                  <hr className='w-2/3 mx-auto h-0.5 border-none outline-none bg-[var(--primary)] hidden' />
               </NavLink>
               <NavLink to='/doctors'>
                  <li className='py-1 text-sm font-medium'>ALL DOCTORS</li>
                  <hr className='w-2/3 mx-auto h-0.5 border-none outline-none bg-[var(--primary)] hidden' />
               </NavLink>
               <NavLink to='/about'>
                  <li className='py-1 text-sm font-medium'>ABOUT</li>
                  <hr className='w-2/3 mx-auto h-0.5 border-none outline-none bg-[var(--primary)] hidden' />
               </NavLink>
               <NavLink to='/contact'>
                  <li className='py-1 text-sm font-medium'>CONTACT</li>
                  <hr className='w-2/3 mx-auto h-0.5 border-none outline-none bg-[var(--primary)] hidden' />
               </NavLink>

            </ul>

            <div className='flex gap-3'>
               {
                  isLogin ?
                     <div className='flex flex-col gap-2 group cursor-pointer relative'>
                        <p className='flex items-center gap-3' onClick={() => setOpen(prev => !prev)}>
                           <img className='w-9 rounded-full' src={assets.profile_pic} alt="" />
                           <img className='w-3' src={assets.dropdown_icon} alt="" />
                        </p>
                        <div className={`z-18 bg-neutral-200/99 rounded absolute right-0 top-0 mt-14 ${open ? 'block' : 'hidden'}`}>
                           <p  className='text-gray-600 px-6 min-w-[190px] py-2 hover:bg-stone-300 hover:text-gray-700'>My Profile</p>
                           <p  className='text-gray-600 px-6 min-w-[190px] py-2 hover:bg-stone-300 hover:text-gray-700'>My Appointments</p>
                           <p onClick={() => {setIsLogin(false); localStorage.removeItem('token'); navigate('/')}}  className='text-gray-600 px-6 min-w-[190px] py-2 hover:bg-stone-300 hover:text-gray-700'>Logout</p>
                        </div>
                     </div>
                     :
                     <button onClick={() => navigate('/login')} className='px-6 py-2 bg-[var(--primary)] text-white rounded-full cursor-pointer'>Create account</button>

               }
               <img onClick={() => setIsShowMenu(true)} className='md:hidden w-8 cursor-pointer' src={assets.menu_icon} alt="" />
            </div>
         </div>

         {/* ----------  Mobile Navbar --------------- */}


         {
            isShowMenu && (
               <div className={`absolute right-0 top-0 bottom-0 w-full transition-all duration-300 z-20 bg-white p-4`}>
                  <div className='flex items-center justify-between'>
                     <img onClick={() => { navigate('/'); setIsShowMenu(false) }} className='w-36 cursor-pointer' src={assets.logo} alt="" />
                     <img onClick={() => setIsShowMenu(false)} className='w-7 cursor-pointer' src={assets.cross_icon} alt="" />
                  </div>
                  <ul className='flex flex-col gap-3 text-center mt-16'>
                     <NavLink to='/'>
                        <li onClick={() => setIsShowMenu(false)} className='text-sm font-medium w-full hover:bg-[var(--primary)] hover:text-white hover:rounded py-2'>HOME</li>
                     </NavLink>
                     <NavLink to='/doctors'>
                        <li onClick={() => setIsShowMenu(false)} className='text-sm font-medium w-full hover:bg-[var(--primary)] hover:text-white hover:rounded py-2'>ALL DOCTORS</li>
                     </NavLink>
                     <NavLink to='/about'>
                        <li onClick={() => setIsShowMenu(false)} className='text-sm font-medium w-full hover:bg-[var(--primary)] hover:text-white hover:rounded py-2'>ABOUT</li>
                     </NavLink>
                     <NavLink to='/contact'>
                        <li onClick={() => setIsShowMenu(false)} className='text-sm font-medium w-full hover:bg-[var(--primary)] hover:text-white hover:rounded py-2'>CONTACT</li>
                     </NavLink>

                  </ul>
               </div>
            )
         }
      </div>

   )
}

export default Navbar