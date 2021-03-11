"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Token_1 = __importDefault(require("../classes/Token"));
var usuario_modelo_1 = require("../modelos/usuario.modelo");
var usuarioController = /** @class */ (function () {
    function usuarioController() {
    }
    usuarioController.prototype.registro = function (req, res) {
        var params = req.body;
        var usuarioNuevo = new usuario_modelo_1.Usuario();
        usuarioNuevo.nombre = params.nombre;
        usuarioNuevo.email = params.email;
        usuarioNuevo.password = params.password;
        usuarioNuevo.edad = params.edad;
        usuario_modelo_1.Usuario.create(usuarioNuevo).then(function (usuarioDB) {
            if (!usuarioDB) {
                return res.status(500).send({
                    status: "error",
                    mensaje: "Error al crear el usuario"
                });
            }
            res.status(200).send({
                status: "ok",
                mensaje: "Se ha creado el usuario",
                usuario: usuarioDB
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
        usuario_modelo_1.Usuario.findOne({ nombre: params.nombre, password: params.pwd }).then(function (usuarioDB) {
            if (!usuarioDB) {
                return res.status(500).send({
                    status: 'error',
                    mensaje: "Usuario y/o contraseña incorrectas"
                });
            }
            var usuarioQueDevuelvo = new usuario_modelo_1.Usuario();
            usuarioQueDevuelvo.nombre = usuarioDB.nombre;
            usuarioQueDevuelvo._id = usuarioDB._id;
            res.status(200).send({
                status: 'ok',
                mensaje: "Loggeado correctamente",
                usuario: usuarioQueDevuelvo,
                token: Token_1.default.generaToken(usuarioQueDevuelvo)
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
