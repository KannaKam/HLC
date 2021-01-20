import { Router } from "express";
import userController from "../controllers/user.controller";
// Creamos una variable que guarde una ruta( tipo express)
const userRoutes = Router();
// Vamos a ir añadiendo esto a /usuario/getSaludo
// Vamos a llamar a la función usuarioController
//prototype es para saber que es esa función, para poder acceder
userRoutes.get('/getSaludo',userController.prototype.getSaludo);
userRoutes.post('/testPost',userController.prototype.testPost);
// si lo exporta me deja usarlo en otros lugares del servidor,
// default que es lo unico que vamos a definir e slo unico que quiero expotar
export default userRoutes;
