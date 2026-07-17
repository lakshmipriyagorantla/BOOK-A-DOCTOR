import express from 'express'
import userModel from '../models/useModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import validator from 'validator'


const registerController = async (req, res) => {
   try {
      console.log('register request body:', req.body)
      const { email, name, password } = req.body

      const user = await userModel.findOne({ email })
      if (user) {
         return res.status(400).json({ success: false, message: 'User Already Exist' })
      } else {
         if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: 'invalid Email' })
         }

         if (!password || password.length < 8) {
            return res.status(400).json({ success: false, message: 'Entre a Strong Password' })
         }
         const salt = await bcrypt.genSalt(10)
         const hashedPassword = await bcrypt.hash(password, salt)
         const newUser = new userModel({ name, email, password: hashedPassword })
         await newUser.save()

         const token = jwt.sign({ email }, process.env.SECRET_KEY || 'secret123')
         return res.json({ success: true, token })
      }



   } catch (error) {
      console.error('register error:', error)
      return res.status(500).json({ success: false, message: 'Server Error' })
   }
}




const loginController = async (req, res) => {
   const { email, password } = req.body


   try {

      const user = await userModel.findOne({ email })
      if (!user) {
         return res.status(400).json({ success: false, message: "Account Not Exist" })
      }
      if (!validator.isEmail(email)) {
         return res.status(400).json({ success: false, message: 'invalid Email' })
      }

      if (!password || password.length < 8) {
         return res.status(400).json({ success: false, message: 'Entre a Strong Password' })
      }
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
         return res.status(400).json({ success: false, message: 'Invalid Credentials' })
      }

      const token = jwt.sign({ email }, process.env.SECRET_KEY)
      return res.json({ success: true, token })


   } catch (error) {
      console.error('login error:', error)
      return res.status(500).json({ success: false, message: 'Server Error' })
   }
}

export { registerController, loginController }