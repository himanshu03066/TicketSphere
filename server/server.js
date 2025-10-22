import express from 'express';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express'
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"
import showRouter from './routes/showRoutes.js';


const port=3000;

dotenv.config();
await connectDB();
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

app.use("/api/inngest", serve({ client: inngest, functions }));

app.use('/api/show',showRouter);  
