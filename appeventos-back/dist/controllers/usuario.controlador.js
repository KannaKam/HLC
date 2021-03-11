"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Token_1 = __importDefault(require("../classes/Token"));
var user_model_1 = require("../models/user.model");
var usuarioController = /** @class */ (function () {
    function usuarioController() {
    }
    usuarioController.prototype.signup = function (req, res) {
        var params = req.body;
        var newUser = new user_model_1.User();
        newUser.name = params.name;
        newUser.email = params.email;
        newUser.password = params.password;
        newUser.age = params.age;
        user_model_1.User.create(newUser).then(function (DBUser) {
            if (!DBUser) {
                return res.status(500).send({
                    status: "error",
                    mensaje: "Unable to create user."
                });
            }
            res.status(200).send({
                status: "ok",
                mensaje: "User signed up succesfully",
                usuario: DBUser
            });
        }).catch(function (err) {
            res.status(500).send({
                status: 'error',
                error: err
            });
        });
    };
    usuarioController.prototype.login = function (req, res) {
        var params = req.body;
        user_model_1.User.findOne({ nombre: params.nombre, password: params.pwd }).then(function (usuarioDB) {
            if (!usuarioDB) {
                return res.status(500).send({
                    status: 'error',
                    mensaje: "Usuario y/o contraseña incorrectas"
                });
            }
            var usuarioQueDevuelvo = new user_model_1.User();
            usuarioQueDevuelvo.name = usuarioDB.name;
            usuarioQueDevuelvo._id = usuarioDB._id;
            res.status(200).send({
                status: 'ok',
                mensaje: "Loggeado correctamente",
                usuario: usuarioQueDevuelvo,
                token: Token_1.default.generateToken(usuarioQueDevuelvo)
            });
        }).catch(function (err) {
            res.status(500).send({
                status: 'error',
                mensaje: "Error en la BBDD",
                error: err
            });
        });
    };
    return usuarioController;
}());
exports.default = usuarioController;
