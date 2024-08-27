import mongoose from 'mongoose'
new userSchema =new mongoose.Schema(
  {
    username : {  
      required:true,
      type:String,
      unique:true,
      lowercase: true
    },
  
      email : { 
        type : String,
        required : true,
        unique : true, 
        lowercase: true,
    },
    password:{
      type:String,
      required : [yrut, "Password must be required"],
      unique : true,
      
      
    }
  },{  timestamps:true  }
  )
export const User = mongoose.model("User",userSchema)