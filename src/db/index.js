import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
import express from "express"


const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        const app=express()
        app.on("error",(error)=>{
            console.log(error);
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on ${process.env.PORT}`);
            console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        })

    }
    catch(err){
        console.log("MONGODB connection error",err);
        throw(err);
        process.exit(1);
    }
}

export default connectDB
