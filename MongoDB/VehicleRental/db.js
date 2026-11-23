const dotenv = require("dotenv")

const mongoose= require("mongoose");
dotenv.config();
const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MongoConnectURL);
        console.log("MongoDB connected successfully");
    }
    

    catch(error){
        console.log("Database connection failed:", error.message);
    }
};
module.exports=connectDB;