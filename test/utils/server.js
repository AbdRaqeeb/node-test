import request from 'supertest';
import app from "../../server/app.js";
import 'dotenv/config.js';


const server = () => request(app);

export default server;