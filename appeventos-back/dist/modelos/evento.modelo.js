"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evento = void 0;
var mongoose_1 = require("mongoose");
var mongoose_2 = __importDefault(require("mongoose"));
;
var eventSchema = new mongoose_1.Schema({
    idUsuario: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Usuario' },
    nombre: String,
    fecha: Date,
    asistentes: Array,
}, {
    timestamps: true,
});
exports.Evento = mongoose_2.default.model('Evento', eventSchema);
