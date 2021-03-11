export interface Response {
    status: string,
    message: string,
    user: User,
    error?: any,
    token: string,
    events:Event[]
}


export interface Decode {
    exp: number;
    iat: number;
    user: User;
}

export interface User {
    _id?: string,
    username: string,
    email: string,
    password: string,
    age: number
}

export interface Event{
    _id?:string,
    userID?:string,
    name?:string,
    date?:Date,
    participants?:string[]
}