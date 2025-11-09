import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import iteamRoutes from './routes/iteamRoutes.js'
dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/api/users",userRoutes)
app.use("/api/iteams",iteamRoutes)


app.listen(PORT,()=>{
    console.log(`Server is running at the port ${PORT}`);
})

