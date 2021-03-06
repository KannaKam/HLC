"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventoController = void 0;
var evento_modelo_1 = require("../modelos/evento.modelo");
var eventoController = /** @class */ (function () {
    function eventoController() {
    }
    eventoController.prototype.traerEventos = function (req, resp) {
        evento_modelo_1.Evento.find().then(function (eventDB) {
            if (!eventDB) {
                return resp.status(200).send({
                    status: 400,
                    mensaje: 'No hay eventos',
                });
            }
            ;
            resp.status(200).send({
                status: "ok",
                mensaje: 'Eventos traídos con éxito',
                eventos: eventDB,
            });
        }).catch(function (err) {
            resp.status(500).send({
                status: "error",
                mensaje: err
            });
        });
    };
    ;
    eventoController.prototype.eliminarEvento = function (req, resp) {
        var params = req.body;
        evento_modelo_1.Evento.deleteOne({ "_id": params._id }).then(function () {
            resp.status(200).send({
                status: "ok",
                mensaje: 'Evento eliminado'
            });
        }).catch(function (err) {
            resp.status(500).send({
                status: "error",
                mensaje: err
            });
        });
    };
    ;
    eventoController.prototype.crearEvento = function (req, resp) {
        var params = req.body;
        var event = new evento_modelo_1.Evento();
        event.idUsuario = params.usuario._id;
        event.nombre = params.nombre;
        event.fecha = params.fecha;
        event.asistentes = [params.usuario.nombre];
        evento_modelo_1.Evento.create(event).then(function () {
            resp.status(200).send({
                status: "ok",
                mensaje: 'Evento creado'
            });
        }).catch(function (err) {
            resp.status(500).send({
                status: "error",
                mensaje: err
            });
        });
    };
    ;
    eventoController.prototype.actualizarEvento = function (req, resp) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                params = req.body;
                evento_modelo_1.Evento.findOne({ _id: params._id }).then(function (eventDB) {
                    if (!eventDB) {
                        return resp.status(200).send({
                            status: "error",
                            message: 'No se encuentra el evento',
                        });
                    }
                    ;
                    if (eventDB.nombre !== params.nombre) {
                        eventDB.nombre = params.nombre;
                    }
                    if (eventDB.fecha !== params.fecha) {
                        eventDB.fecha = params.fecha;
                    }
                    if (eventDB.asistentes.length !== params.asistentes.length) {
                        eventDB.asistentes = params.asistentes;
                    }
                    eventDB.save().then(function () {
                        resp.status(200).send({
                            status: "ok",
                            mensaje: 'Evento actualizado'
                        });
                    }).catch(function (err) {
                        resp.status(500).send({
                            status: "error",
                            mensaje: err
                        });
                    });
                }).catch(function (err) {
                    resp.status(500).send({
                        status: "error",
                        mensaje: err
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    return eventoController;
}());
exports.eventoController = eventoController;
;
