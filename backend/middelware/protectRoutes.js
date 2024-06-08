import jwt from "jsonwebtoken";
import UserModel from "../models/user_model.js";

const protectRoutes=async(req,res,next)=>{
    try {
        const token=req.cookies.jwt;
        if (!token) {
            return res.status(401).json({error:"Unathorized - No Token Provide"})
        }
        const decode=jwt.verify(token,process.env.JWT_SECRET_KEY)
        if (!decode) {
            return res.status(401).json({error:"Unathorized - Invalid Token"})            
        }
        const user=await UserModel.findById(decode.userId).select("-password")
        if (!user) {
            return res.status(400).json({error:"user not found"})            
        }
        req.user=user
        next()
    } catch (error) {
        console.log("Error in sending protectRoutes controller:",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}

export default protectRoutes