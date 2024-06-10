import { Router } from "express";
import { login } from "./controller";

const authRoad: Router = Router();

authRoad
    .post('/login', login);

export default authRoad;