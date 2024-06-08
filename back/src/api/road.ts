import { Router } from "express";
import { index } from "./presentations/controller";

const apiClientRoad: Router = Router();

apiClientRoad
    .get('/', index)

export default apiClientRoad;