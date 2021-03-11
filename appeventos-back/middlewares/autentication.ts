import { NextFunction } from "express";
import Token from "../classes/Token";

export const autentication = (req: any, res: any, next: NextFunction) => {
    let userToken: string = req.get("Authorization") || "";
    if (userToken != "") {
        userToken = userToken.split("Bearer ")[1];
    }

    Token.verifyToken(userToken).then((decoded: any) => {
        req.body.user = decoded.user;
        next();
    }).catch(err => {
        if(err.message === 'Invalid token') {
            res.status(401).json({
                status: 401,
                message: 'Unauthorized: Invalid token'
            });

        } else {
            res.status(401).json({
                status: 401,
                message: 'Session has timed out'
            });
        };
    });
}