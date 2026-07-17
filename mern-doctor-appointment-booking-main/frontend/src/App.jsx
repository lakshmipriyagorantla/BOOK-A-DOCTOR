import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Appointment from './pages/Appointment'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-[10%]'>
      <Navbar />
      <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/doctors' element={<Doctors />}/>
         <Route path='/doctors/:speciality' element={<Doctors />}/>
         <Route path='/appointment/:docId' element={<Appointment />}/>
         {/* <Route path='/appointment' element={<Appointment />}/> */}
         <Route path='/about' element={<About />}/>
         <Route path='/contact' element={<Contact />}/>
         <Route path='/login' element={<Login />}/>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App