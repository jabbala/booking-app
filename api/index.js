import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import roomsRoute from './routes/rooms.js';
import hotelsRoute from './routes/hotels.js';



const app = express()

dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDB")
    } catch(error){
        console.log(error);
        throw error;
    }
};

mongoose.connection.on("connected", ()=>{
    console.log("mongodb connected!");
})


app.use(express.json())

app.use('/api/auth', authRoute);
app.use('/api/user', usersRoute);
app.use('/api/room', roomsRoute);
app.use('/api/hotel', hotelsRoute);


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
});

mongoose.connection.on("disconnected", ()=>{
    console.log("mongodb disconnected!");
});



app.listen(8800, () => {
    connect()
    console.log("Connected to backend.");
  });