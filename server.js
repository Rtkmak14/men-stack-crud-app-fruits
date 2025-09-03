//load environment variables
const dotenv = require("dotenv")
dotenv.config()
// console.log(process.env)

//imports express
const express = require("express")
const app = express()

//connect to mongoDB
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", ()=> {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

const PORT = process.env.PORT

//start server
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})

//import model
const Fruit = require(`./models/fruit.js`)

//Routes
app.get(`/`,(req,res)=> {
    res.send("Hello, friend!")
})