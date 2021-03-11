import { Router } from "express";
import { eventController } from "../controllers/event.controller";
import { autentication } from "../middlewares/autentication";

export const eventRoutes = Router();

eventRoutes.post('/create', autentication, eventController.prototype.createEvent);
eventRoutes.get('/find', autentication, eventController.prototype.findEvents);
eventRoutes.post('/update', autentication, eventController.prototype.updateEvents);
eventRoutes.post('/delete', autentication, eventController.prototype.deleteEvent);