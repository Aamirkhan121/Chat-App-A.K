import mongoose from "mongoose";

const connectTOMongoDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL,)
        console.log("Connect TO MongoDB")
    } catch (error) {
        console.log("Error Connecting to MongoDb:",error.message)
    }
}
export default connectTOMongoDB