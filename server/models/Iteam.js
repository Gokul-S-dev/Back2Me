import mongoose from "mongoose";

const iteamSchema = new mongoose.Schema(
    {
    title:{type:String , required:true},
    description:{type:String},
    image:{type:String},
    location:{type:String},
    status:{type:String , enum:["lost","found"],require:true},
    date:{type: Date ,default:Date.now}
},
{timestamps:true}
);
                               //collection name
export default mongoose.model("Iteam",iteamSchema);
                                          //schema name