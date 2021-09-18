/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import dotEnv from 'dotenv';
dotEnv.config();

import cors from 'cors';
import express from 'express';
import ApiRouter from './api';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', ApiRouter);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
