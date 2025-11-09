import mongoose from "mongoose";
import { ref } from "process";

const iteamSchema = new mongoose.Schema(
    {
    title:{type:String , required:true},
    description:{type:String},
    image:{type:String},
    location:{type:String},
    status:{type:String , enum:["lost","found"],require:true},
    date:{type: Date ,default:Date.now},
    user:{type: mongoose.Schema.Types.ObjectId ,ref:"User"},
},
{timestamps:true}
);

export default mongoose.model("Iteam",iteamSchema);