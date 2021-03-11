import { Request, Response } from "express"
import Token from "../classes/Token";
import { User } from "../models/user.model";

class userController {

    signup(req: Request, res: Response) {
        let params = req.body;
        const newUser = new User();
        newUser.username = params.username;
        newUser.email = params.email;
        newUser.password = params.password;
        newUser.age = params.age;
        User.create(newUser).then(DBUser => {
            if (!DBUser) {
                return res.status(500).send({
                    status: "error",
                    message: "Unable to create user."
                })
            }
            res.status(200).send({
                status: "ok",
                message: "User signed up succesfully",
                user: DBUser
            })
        }).catch(err => {
            res.status(500).send({
                status: 'error',
                error: err
            })
        });

    }

    login(req: Request, res: Response) {
        const params = req.body;
        User.findOne({ username: params.username, password: params.password }).then((DBUser) => {
            if (!DBUser) {
                return res.status(500).send({
                    status: 'error',
                    message: "Wrong credentials"
                })
            }
            const returnedUser = new User();
            returnedUser.username = DBUser.username;
            returnedUser._id = DBUser._id;
            res.status(200).send({
                status: 'ok',
                message: "Logged succesfully",
                user: returnedUser,
                token: Token.generateToken(returnedUser)
            })
        }).catch(err => {
            res.status(500).send({
                status: 'error',
                message: "DB Error",
                error: err
            })
        })
    }
}

export default userController