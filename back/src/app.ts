import express, { Express } from "express";
import session from "express-session";
import cors from 'cors';
import bodyParser from "body-parser";
import apiClientRoad from "./api/road";
import authRoad from "./app/auth/road";

const app: Express = express();
const port: number = 3000;

app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
    }))
    .use(cors({origin: '*'}))
    .use(bodyParser.json());
app
    .use('/', authRoad)
    .use('/api', apiClientRoad);

app.listen(port, () => {
    console.log(`http://localhost:${port}/api/presentation`);
})