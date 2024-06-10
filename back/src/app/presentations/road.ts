import { Router } from "express";
import { index } from "./controller";

const presentationRoads: Router = Router();

presentationRoads
    .get('/', index)

export default presentationRoads;