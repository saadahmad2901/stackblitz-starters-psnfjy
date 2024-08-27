import { Timestamp } from 'bson'
import mongoose from 'mongoose'
const userSchema =new mongoose.Schema({
  username:{
    type:String,
    required:true,
    lowercase:true,
    unique:true,
  },
  email:{
    type:String,
    required:true,
    lowercase:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  }

},{Timestamps:true})
export const User = mongoose.model("User",userSchema)