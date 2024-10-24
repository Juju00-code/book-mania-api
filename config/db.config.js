const mongoose = require("mongoose")
const colors = require("colors")

const db_connection = async()=>{
   try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log(
        "Connection to MongoDB is established".blue,
    )
   } catch (error) {
    
   }
}

module.exports=db_connection