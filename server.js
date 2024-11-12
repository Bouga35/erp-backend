// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import inventoryRoutes from './routes/inventory.js';
import hrRoutes from './routes/hr.js';

import salesRoutes from './routes/sales.js';
import authRoutes from './routes/auth.js';






dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Allow frontend on port 3000
  }));

const PORT = process.env.PORT || 5000;
const DB_URI = "mongodb://localhost:27017/erp";

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


app.use('/api/inventory', inventoryRoutes);
app.use('/api/hr', hrRoutes);
app.use('/api/sales', salesRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
