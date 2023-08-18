const mongoose = require('mongoose')

const dbConnect = async()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connection established")
    }catch(error){
        console.log(error)
    }
}

module.exports = dbConnect