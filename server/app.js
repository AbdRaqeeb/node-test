import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config.js';
import {errorHandler} from '../middleware/error.js';

const app = express();

app.use(express.json({extended: false}));

app.use(cors());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// import router
import router from '../routes/route.js';

// Set static folder
app.use(express.static('public'));

// mount router
app.use('/api/v1', router);


app.use(errorHandler);


export default app;
