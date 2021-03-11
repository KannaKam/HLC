"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventRoutes = void 0;
var express_1 = require("express");
var event_controller_1 = require("../controllers/event.controller");
var autentication_1 = require("../middlewares/autentication");
exports.eventRoutes = express_1.Router();
exports.eventRoutes.post('/create', autentication_1.autentication, event_controller_1.eventController.prototype.createEvent);
exports.eventRoutes.get('/find', autentication_1.autentication, event_controller_1.eventController.prototype.findEvents);
exports.eventRoutes.post('/update', autentication_1.autentication, event_controller_1.eventController.prototype.updateEvents);
exports.eventRoutes.post('/delete', autentication_1.autentication, event_controller_1.eventController.prototype.deleteEvent);
