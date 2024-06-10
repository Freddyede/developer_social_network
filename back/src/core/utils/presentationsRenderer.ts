import { apiRoads } from "../constants/apiRoads";

export const jsonRenderer = (res: any) => {
    return {
        message: 'OK',
        roads: (apiRoads !== undefined) ? apiRoads : [],
        status: res.statusCode
    }
}