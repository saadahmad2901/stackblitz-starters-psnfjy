import mongoose  from "mongoose"
const  docterSchema = new mongoose.Schema({
name:{
  type:String,
 required:true
},
salery:{
  type:Number,
 required:true
},
qualification:{
  type:String,
 required:true
},
expereniousInYears:{
  type:Number,
 required:true,
 default:0
},
worksInHospitals:[
  {
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital",  
  }
    
  }
],
},{timestamps:true})

export const Docter = mongoose.model("Docter",docterSchema )
