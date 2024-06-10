import { Router } from "express";
import presentationRoads from "../app/presentations/road";
import usersRoad from "../app/users/roads";

const apiClientRoad: Router = Router();

apiClientRoad
    .get('/', (_req: any, res: any) => res.redirect('/api/presentation'))
    .use('/presentation', presentationRoads)
    .use('/users', usersRoad);

export default apiClientRoad;