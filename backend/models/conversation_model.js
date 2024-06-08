import mongoose from "mongoose";

const conversationSchema=new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
    ],
    message:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Message',
            default:[],
        },
    ],
},{timestamps:true})

const conversationModel=mongoose.model("conversation",conversationSchema);
export default conversationModel