//import express
const express = require("express")
const app = express()


const dotenv = require("dotenv")
dotenv.config()
// console.log(process.env)
const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})
