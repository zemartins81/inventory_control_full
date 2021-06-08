import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
// eslint-disable-next-line import/extensions
import defaultRouter from './routes/defaultRouter.js';

config({
  path: './config/.env',
});

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//app.use('/files', express.static(path.resolve(__dirname, 'temp', 'uploads')));

app.use(defaultRouter);

export default app;
