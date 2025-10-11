import express from 'express';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express'
import 'dotenv/config';
import connectDB from './config/db.js';
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"

const port=3000;

await connectDB()
const app=express();
app.use(clerkMiddleware())
app.use(express.json())
app.use(cors());

app.listen(port,()=>{
    console.log(`server is listing at https://localhost:${port}`)
})

app.get("/",(req,res)=>{
    res.send("server is live")
})
// Set up the "/api/inngest" (recommended) routes with the serve handler
app.use("/api/inngest", serve({ client: inngest, functions }));
