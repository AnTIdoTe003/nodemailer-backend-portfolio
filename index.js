const express = require('express')
const {google} = require('googleapis')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
const mailRoute = require('./routes/mailRoutes.js')
const dbConnect = require('./config/dbConnect.js')
const cors = require('cors')
dotenv.config()

const app = express()
// db connect
dbConnect()
app.use(cors())
app.use(express.json())


app.use('/api/v1/mail',mailRoute)
const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
    
})