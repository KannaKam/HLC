"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var mongoose_2 = __importDefault(require("mongoose"));
var userSchema = new mongoose_1.Schema({
    name: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
    age: { type: Number, }
}, {
    timestamps: true
});
exports.User = mongoose_2.default.model('User', userSchema);
