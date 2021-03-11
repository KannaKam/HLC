"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Token_1 = __importDefault(require("../classes/Token"));
var user_model_1 = require("../models/user.model");
var userController = /** @class */ (function () {
    function userController() {
    }
    userController.prototype.signup = function (req, res) {
        var params = req.body;
        var newUser = new user_model_1.User();
        newUser.username = params.username;
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
    userController.prototype.login = function (req, res) {
        var params = req.body;
        user_model_1.User.findOne({ username: params.username, password: params.password }).then(function (DBUser) {
            if (!DBUser) {
                return res.status(500).send({
                    status: 'error',
                    mensaje: "Wrong credentials"
                });
            }
            var returnedUser = new user_model_1.User();
            returnedUser.username = DBUser.username;
            returnedUser._id = DBUser._id;
            res.status(200).send({
                status: 'ok',
                mensaje: "Logged succesfully",
                usuario: returnedUser,
                token: Token_1.default.generateToken(returnedUser)
            });
        }).catch(function (err) {
            res.status(500).send({
                status: 'error',
                mensaje: "DB Error",
                error: err
            });
        });
    };
    return userController;
}());
exports.default = userController;
