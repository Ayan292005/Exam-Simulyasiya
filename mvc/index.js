import express from "express"

const app=express()

import cors from "cors"

import { config } from "dotenv"

import "./config/config.js"
import { route } from "./routers/router.js"

app.use(express.json())
app.use(cors())
config()

app.use("/shop",route)

app.listen(1010,()=>{
    console.log("1010 port");
    
})