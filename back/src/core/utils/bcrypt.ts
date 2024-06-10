import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userModel } from "../constants/models";

export const loginUtils = (req: any, res: any) => {
    userModel.login({email: req.body.email})
        .then((data: any): void => {
            bcrypt.compare(req.body.password, data[0].password).then((result: boolean) => {
                if(result) {
                    req.session.user = {id: data[0].id, email: req.body.email,roles: data[0].roles};
                    req.session.save();
                    return res.status(200).json({
                        token: jwt.sign(
                            {
                                session: data
                            },
                            'shhhhh',
                            {
                                expiresIn: '1h',
                                encoding: 'utf-8'
                            }
                        ),
                        status: res.statusCode
                    })
                } else {
                    res.status(401).json({message: 'UNAUTHORIZED', status: res.statusCode})
                }
            });
        })
        .catch(() => res.status(500).json({message: 'INTERNAL SERVER ERROR', status: res.statusCode}));
}