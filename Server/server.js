//getting Express server
const express=require("express")
const app=express();
//getting DB
const dbConnect=require("./utils/database/dbConnect")
//env configuration
const dotenv=require("dotenv")
dotenv.config()


const runServer=async()=>{
    await dbConnect();
    const PORT = process.env.PORT || 5000;
    try {
        app.listen(PORT,()=>{
            console.log("server is listening on "+PORT);
            
        })
    } catch (error) {
        //pore dekhchi
    }
   
   
}


runServer();
