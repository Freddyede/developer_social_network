import { loginUtils } from "../../core/utils/bcrypt";

export const login = (req: any, res: any): void => loginUtils(req, res);