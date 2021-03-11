"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var express_1 = __importDefault(require("express"));
var Server = /** @class */ (function () {
    function Server() {
        this.port = 3300;
        this.app = express_1.default();
    }
    Server.prototype.start = function (data) {
        this.app.listen(this.port, data);
    };
    return Server;
}());
exports.Server = Server;
