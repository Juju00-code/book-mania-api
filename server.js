const express = require("express")
const app = express()
const db_connection = require("./config/db.config")
require("dotenv").config()
const port = process.env.PORT || 5000


db_connection()

app.get("/",(req,res)=>{
    res.send("Welcom to Book Mania")
})

app.listen(port, ()=>{
    console.log(`>>Server is up and running http//localhost:${port}`.cyan)
})


