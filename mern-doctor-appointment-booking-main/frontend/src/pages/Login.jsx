import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/Context'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

   const navigate = useNavigate()

   const {state, token,setState, setToken, backendUrl, setIsLogin } = useContext(AppContext)

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   ;
   
   const onSubmitHandler = async (e) => {
      e.preventDefault();
      try {
               if(state === 'sign up') {
               const { data } = await axios.post(backendUrl+'/api/user/register', {name,email,password})
                  if(data.success) {
                     localStorage.setItem('token',data.token)
                     setToken(data.token)
                     setIsLogin(true)
                     toast.success('Account Created')                     
                  } else {
                     toast.error(data.message)
                  }
               } else {

                  
               const { data } = await axios.post(backendUrl + '/api/user/login', {email,password})
                  if(data.success) {
                     localStorage.setItem('token', data.token)
                     toast.success('Login successfuly')
                     setIsLogin(true)
                  } else {
                     toast.error(data.message)
                  }
               }
      } catch (error) {
         toast.error(error.message)
         console.log(error);
      }
   }


   useEffect(() => {
      token && navigate('/')
   },[token])
   

   return (
      <div className='flex justify-center my-28 mb-56'>
         <form onSubmit={onSubmitHandler} className='p-9 py-11 border border-gray-300 rounded-xl shadow-2xl shadow-indigo-100 h-fit'>


            <p className='text-2xl font-semibold mb-1 text-gray-600'>{state === 'sign up' ? 'Create Account' : 'Login'} </p>


            <p className='text-gray-500 mb-3'>Please {state} to book appointment</p>

            {
               state === 'sign up' &&
               <div className='mb-2'>
                  <label htmlFor="name" className='text-gray-500 mb-3 text-sm'>Full Name</label>
                  <input onChange={(e) => setName(e.target.value)} type="text" id='name' value={name} className='mt-1.5 border border-gray-300 outline-[var(--primary)] px-2 py-1 w-full rounded' />
               </div>
            }
            <div className='mb-2'>
               <label htmlFor="email" className='text-gray-500 mb-3 text-sm'>Email</label>
               <input onChange={(e) => setEmail(e.target.value)} type="email" id='email' value={email} className='mt-1.5 border border-gray-300 outline-[var(--primary)] px-2 py-1 w-full rounded' />
            </div>
            <div className='mb-5'>
               <label htmlFor="password" className='text-gray-500 text-sm'>Password</label>
               <input onChange={(e) => setPassword(e.target.value)} type="password" id='password' value={password} className='mt-1.5 border border-gray-300 outline-[var(--primary)] px-2 py-1 w-full rounded' />
            </div>

            <button type='submit' className='text-white bg-[var(--primary)] py-2 rounded cursor-pointer w-full text-sm'>{state === 'sign up' ? 'Create Account' : 'Login'} </button>
            {/* <p className='mt-3 text-sm text-gray-500'>{state === 'sign up' ? `Already have an account? <span className='text-[var(--primary)] underline'>Login here</span>` : `D'ont have an account? ${<span className='text-[var(--primary)] underline'></span>}`}</p> */}
            {
               state === 'sign up' ? 
               <p onClick={() => setState('login')} className='mt-3 text-sm text-gray-500'>Already have an account? <span className='text-[var(--primary)] underline underline-[var(--primary)] cursor-pointer'>Login here</span></p> :
               <p onClick={() => setState('sign up')} className='mt-3 text-sm text-gray-500'>D'ont have an account? <span className='text-[var(--primary)] underline underline-[var(--primary)] cursor-pointer'>Sign Up</span></p>
            }
         </form>
      </div>
   )
}

export default Login