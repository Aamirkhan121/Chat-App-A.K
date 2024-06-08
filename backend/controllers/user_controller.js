import UserModel from "../models/user_model.js";

const getUsersForSidebar=async(req,res)=>{
try {
    const loggedInUser=req.user._id;
    const filteredUsers=await UserModel.find({_id:{$ne:loggedInUser}}).select("-password")

    res.status(200).json(filteredUsers)
} catch (error) {
    console.error("Error in getUserForSidebar:",error.message)
    res.status(500).json({error:"Internal server error"})
}
}

export {getUsersForSidebar}