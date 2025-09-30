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
export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {
  MID: process.env.PAYTM_MID,
  WEBSITE: process.env.PAYTM_WEBSITE,
  CHANNEL_ID: process.env.PAYTM_CHANNEL_ID,
  INDUSTRY_TYPE_ID: process.env.PAYTM_INDUSTRY_TYPE_ID,
  ORDER_ID: uuid(),
  CUST_ID: process.env.PAYTM_CUST_ID,
  TXN_AMOUNT: '100',
  CALLBACK_URL: 'http://localhost:5000/callback',
  EMAIL: 'kunaltyagi@gmail.com',
  MOBILE_NO: '1234567852'
};
