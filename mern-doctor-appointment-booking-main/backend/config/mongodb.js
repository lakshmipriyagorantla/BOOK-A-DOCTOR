import mongoose from "mongoose";


const connectDB = async () => {

   // mongoose.connection.on("connection" ,() => console.log('mongoDB connect'))

   mongoose.connect(process.env.MONGO_URL, console.log('mongoDB connect'))
}

export default connectDB;