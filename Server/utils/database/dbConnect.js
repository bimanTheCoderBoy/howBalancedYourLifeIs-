const mongoose=require("mongoose")

const dbConnect=async()=>{
    try {
    await mongoose.connect(process.env.MONGO_URI,{
        dbName:"howBalacedYourLifeIs",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("DB connected"); 
    } catch (error) {
        console.log("DB Error: ",error.massage);
    }
}

module.exports=dbConnect;