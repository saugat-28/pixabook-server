// Library Imports
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';

// Local Imports
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

// Initiating Express and Configuring dotenv
const app = express();
dotenv.config();

// Using BodyParser Limit JSON & URL Body size to 30MB. Enable CORS
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Create Endpoints for posts and user 
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

// Set Port and Connect to Mongoose database
const PORT = process.env.PORT 

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT || 5000, () => console.log(`Server running on Port: ${PORT}`)))
    .catch((error) => console.log(error.message));
