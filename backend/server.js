import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.js";
import messageRoutes from "./routes/message_auth.js";
import userRoutes from "./routes/user_auth.js";
import connectTOMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const PORT=process.env.PORT||5000;
dotenv.config();

app.use(express.json()); // to parse  the incoming requests with JSON payload (from req.body)
app.use(cookieParser())

app.use("/api/auth",authRouter)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

// app.use("/",(req,res)=>{
//     res.status(200).send("Hello Aamir!")
// })

server.listen(PORT,()=>{
    connectTOMongoDB()
     console.log(`Server Running on http://localhost:${PORT}`)
    })