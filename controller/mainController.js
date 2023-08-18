const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const dotenv = require("dotenv");
const messageModal = require("../models/messageModal");
dotenv.config();

const sendMailController = async (req, res) => {
  try {
    const { userEmail, message } = req.body;
    let config = {
      service: "gmail",
      auth: {
        user: 'viperbale.db@gmail.com',
        pass: process.env.APP_PASSWORD,
      },
      tls:{
        rejectUnauthorized:false
      }
    };
    let transporter = nodemailer.createTransport(config);
    let messageConfig = {
      from : 'viperbale.db@gmail.com',
      to : userEmail,
      subject: "Holaaa!!!",
      html: `${message}`
  }
  transporter.sendMail(messageConfig).then(() => {
    return res.status(201).json({
        msg: "you should receive an email"
    })
})
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


const receiveMail = async(req,res)=>{
  try{
    const {name,email, message} = req.body
    const mailData = await messageModal.create({name,email,message})
    res.status(200).json({success: true, data: mailData, message: "Message received successfully"})
  }catch(error){
    res.status(400).json({ success: false, message: error.message });
  }
}

const getMailController = async(req,res)=>{
  try{
      const allMails = await messageModal.find({})
      res.status(200).json({success:true, message:"Fetched all messages", data: allMails})
  }catch(error){
    res.status(400).json({ success: false, message: error.message });
  }
}

module.exports.sendMailController = sendMailController
module.exports.receiveMail = receiveMail
module.exports.getMailController = getMailController
