import { Server } from "./classes/server";
import bodyParser from 'body-parser'
import cors from 'cors'
import userRoutes from "./routes/user.route";
import mongoose from 'mongoose';
import { eventRoutes } from "./routes/event.route";
const server = new Server();



server.app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
server.app.use(bodyParser.json({ limit: '5mb' }));



server.app.use(cors({
    origin: true,
    credentials: true
}))

server.app.use('/user', userRoutes);

server.app.use('/event', eventRoutes);

server.start(() => {
    console.log("Server started on port " + server.port);
});

mongoose.connect('mongodb://localhost:27017/eventsApp',
    {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, (err: any) => {
        if (err) {
            console.log("error", err);
            throw err;
        }
        else {
            console.log('Connected');

        }
    });