import { Server } from "./classes/server";
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from "./routes/user.routes";

const server = new Server();

//bodyParser
server.app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
server.app.use(bodyParser.json({ limit: '5mb' }));
//configuramos el CORS
server.app.use(cors({
origin: true,
credentials: true
}));
server.app.use('/usuario', userRoutes); 

server.start(()=>{
console.log('Server initialized on port ' + server.port );
})
