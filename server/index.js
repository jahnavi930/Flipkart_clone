import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { v4 as uuid } from 'uuid';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Routes from './routes/route.js';

// Load .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// ✅ Use correct MONGO_URI from .env
const MONGO_URI = process.env.MONGO_URI;

// ✅ Call with full URI, not username/password
Connection(MONGO_URI);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

// ✅ Start server after middleware
app.listen(PORT, () => {
  console.log(`🚀 Server is running successfully on PORT ${PORT}`);
  DefaultData(); // only run this after server starts
});

// Paytm config
