import express from 'express'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRoute from './routes/userRoute.js'
import cors from 'cors'
import cloudinaryConfig from './config/cloudinary.js'

// app config
const app = express()
const PORT = process.env.PORT
connectDB()
cloudinaryConfig();



// middlewars
app.use(express.json())
app.use(cors())




// API End points
app.use('/api/user', userRoute)



app.get('/', (req,res) => {
   res.send('API WORKING')
})


app.listen(PORT, () => {
   console.log(`server running in port : ${PORT}`);
})
