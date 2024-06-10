import { Router } from "express";
import { index } from "./controller";

const usersRoad: Router = Router();

usersRoad.get('/', index);

export default usersRoad;