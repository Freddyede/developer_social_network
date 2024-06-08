import express, { Express } from "express";
import session from "express-session";
import cors from 'cors';
import bodyParser from "body-parser";

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
    .get('/api', (_req: any, res: any) =>
        res.status(200).json({
            message: 'hello world !!!',
            status: res.statusCode
        })
    );

app.listen(port, () => {
    console.log(`http://localhost:${port}/api`);
})