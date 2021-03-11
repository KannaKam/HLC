"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuario_controlador_1 = __importDefault(require("../controllers/usuario.controlador"));
var usuarioRutas = express_1.Router();
usuarioRutas.post('/registro', usuario_controlador_1.default.prototype.registro);
usuarioRutas.post('/login', usuario_controlador_1.default.prototype.login);
exports.default = usuarioRutas;
