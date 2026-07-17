import express from 'express'
import { loginController, registerController } from '../controllers/userController.js'

const userRoute = express.Router()

userRoute.post('/register', registerController)
userRoute.post('/login', loginController)


export default userRoute;