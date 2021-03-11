import { Router } from "express"
import userController from "../controllers/user.controller"

const userRoutes = Router();

userRoutes.post('/signup', userController.prototype.signup);
userRoutes.post('/login', userController.prototype.login);

export default userRoutes;