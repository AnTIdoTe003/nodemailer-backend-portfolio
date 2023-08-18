const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})

const messageModal = new mongoose.model('Messages', messageSchema)

module.exports = messageModal