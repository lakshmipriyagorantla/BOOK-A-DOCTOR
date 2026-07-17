import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
   name:{type: String, required: true},
   email:{type: String, required: true, unique: true},
   image:{type: String, default:'image.png'},
   password: {type: String, required: true},
   age: {type: Number}
})

const userModel = mongoose.model('user', userSchema)

export default userModel;