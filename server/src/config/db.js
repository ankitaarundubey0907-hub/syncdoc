const mongoose=require("mongoose")

const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MONGODB connected");
    }
    catch(err){
        console.log("MongDB not connected");
        console.log(err);
        process.exit(1);
    }
};
module.exports=connectdb