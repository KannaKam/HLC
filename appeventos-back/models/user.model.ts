import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'
interface User extends Document {
    username: string,
    email: string,
    password: string,
    age: number
}
const userSchema = new Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String},
    age: { type: Number, }
},
    {
        timestamps: true
    })

export const User = mongoose.model<User>('User', userSchema);

