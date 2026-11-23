
const express= require("express");
const connectDB= require("./db");
const app= express();
connectDB();
app.use(express.json());
app.listen(5000,()=>{
    console.log("server is running on PORT 5000");
})