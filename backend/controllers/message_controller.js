import conversationModel from "../models/conversation_model.js";
import messageModel from "../models/message_model.js";
import { getReceiverSocketId,io} from "../socket/socket.js";

const sendMessage =async(req,res)=>{
   try {
    const {message}=req.body;
    const {id:receiverId}=req.params;
    const senderId=req.user._id;

    let conversation=await conversationModel.findOne({
        participants:{$all:[senderId,receiverId]}
    })
    if (!conversation) {
        conversation=await conversationModel.create({
            participants:[senderId,receiverId]
        })
    }

    const newMessage= new messageModel({
        senderId,
        receiverId,
        message,
    })

    if (newMessage) {
            conversation.message.push(newMessage._id)
        }
        // await conversation.save()
        // await newMessage.save()
    
        await Promise.all([conversation.save(),newMessage.save()]);

        //SOCKET.IO FUNCTIONALTY WILL GO HERE
        const receiverSocketId=getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            // io.to(<socket_id>).emit() used to send events to specific client
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }


    res.status(201).json(newMessage)
   } catch (error) {
    console.log("Error in message_controller:",error.message)
    res.status(500).json({error:"Internal server error"})
   }
}

const getMessage=async(req,res)=>{
    try {
        const {id:userToChatId}=req.params;
        const senderId=req.user._id;

        const conversation=await conversationModel.findOne({
            participants:{$all:[senderId,userToChatId]},
        }).populate("message"); //NOT REFRENCE BUT ACTUAL MESSAGE

        if(!conversation) return res.status(200).json([])

            const messages=conversation.message

            res.status(200).json(messages)
        
    } catch (error) {
        console.log("Error in message_controller:",error.message)
    res.status(500).json({error:"Internal server error"})
    }
}

export{sendMessage,getMessage}