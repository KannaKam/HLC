import { Schema, Document } from 'mongoose';
import mongoose from 'mongoose';

interface IEvent extends Document {
    userID: string;
    name: string;
    date: Date;
    participants: string[];

};



const eventSchema = new Schema({
    userID: { type: Schema.Types.ObjectId, ref: 'User' },
    name: String,
    date: Date,
    participants: Array,
}, {
    timestamps: true,
});

export const Event = mongoose.model<IEvent>('Event', eventSchema);