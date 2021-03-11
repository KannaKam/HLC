"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.autentication = void 0;
var Token_1 = __importDefault(require("../classes/Token"));
var autentication = function (req, res, next) {
    var userToken = req.get("Authorization") || "";
    if (userToken != "") {
        userToken = userToken.split("Bearer ")[1];
    }
    Token_1.default.verifyToken(userToken).then(function (decoded) {
        req.body.user = decoded.user;
        next();
    }).catch(function (err) {
        if (err.message === 'Invalid token') {
            res.status(401).json({
                status: 401,
                message: 'Unauthorized: Invalid token'
            });
        }
        else {
            res.status(401).json({
                status: 401,
                message: 'Session has timed out'
            });
        }
        ;
    });
};
exports.autentication = autentication;
