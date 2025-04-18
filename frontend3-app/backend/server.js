// Imports
import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import cors from 'cors';

dotenv.config();

const app = express(); // Skapa app först!
const PORT = 4321;

//Middleware
app.use(cors());
app.use(express.json());

// Routes


// Anslut till databasen och starta servern
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Failed to connect to database:', err);
    });

//För test bara
app.get('/', (req, res) => {
    res.send('Hello world!')
})