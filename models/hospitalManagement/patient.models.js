import mongoose  from "mongoose"
const  patientSchema = new mongoose.Schema({
name:{
  type:string,
  requird:true,
},
diagnoseWith:{
  type:string,
  requird:true,
},age:{
  type:Number,
  requird:true,
},
adress:{
  type:string,
  requird:true,
},
bloodGroup:{
  type:string,
  requird:true,
},
gender:{
  type:String,
  enum:["MALE","FEMALE","OTHER"],
  require:true,

},
admittedIn:{
type:mongoose.Schema.Types.ObjectId,
ref:"Hospital"
}


},{timestamps:true})

export const Patient = mongoose.model("Patient",patientSchema )
