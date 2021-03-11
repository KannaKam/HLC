import { Request, Response } from "express";
import { Event } from "../models/event.model";


export class eventController {

    findEvents(req: Request, resp: Response) {
        Event.find().then(eventDB => {
            if (!eventDB) {
                return resp.status(200).send({
                    status: 400,
                    message: 'No events available',
                });
            };
            resp.status(200).send({
                status: "ok",
                message: 'Succesfully found events',
                events: eventDB,
            });
        }).catch(err => {
            resp.status(500).send({
                status: "error",
                message: err
            });
        });
    };

    deleteEvent(req: Request, resp: Response) {
        let params = req.body;

        Event.deleteOne({ "_id" : params._id } ).then(() => {
            resp.status(200).send({
                status: "ok",
                message: 'Event deleted'
            });
        }).catch(err => {
            resp.status(500).send({
                status: "error",
                message: err
            });
        });
    };


    createEvent(req: Request, resp: Response) {
        let params = req.body;

        const event = new Event();
        event.userID = params.user._id;
        event.name = params.name;
        event.date = params.date;
        event.participants = [params.user.username];


        Event.create(event).then(() => {
            resp.status(200).send({
                status: "ok",
                message: 'Event created'
            });
        }).catch(err => {
            resp.status(500).send({
                status: "error",
                message: err
            });
        });
    };

    async updateEvents(req: Request, resp: Response) {
        let params = req.body;
        Event.findOne({ _id: params._id }).then(eventDB => {
            if (!eventDB) {
                return resp.status(200).send({
                    status: "error",
                    message: 'Events not found',
                });
            };
            if (eventDB.name !== params.name) {
                eventDB.name = params.name
            }
            if (eventDB.date !== params.date) {
                eventDB.date = params.date
            }

            if (eventDB.participants.length !== params.participants.length) {
                eventDB.participants = params.participants
            }

            eventDB.save().then(() => {
                resp.status(200).send({
                    status: "ok",
                    message: 'Events updated'
                });
            }).catch(err => {
                resp.status(500).send({
                    status: "error",
                    message: err
                });
            });
        }).catch(err => {
            resp.status(500).send({
                status: "error",
                message: err
            });
        })
    }
};