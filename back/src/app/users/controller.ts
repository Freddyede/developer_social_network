import {userModel} from "../../core/constants/models";

export const index = (_req: any, res: any) => userModel.all()
    .then(data => res.json({message: 'OK', users: data, status: res.statusCode}))
    .catch(err => res.status(500).json({message: err.message, status: res.statusCode}));