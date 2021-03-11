"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./classes/server");
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var user_route_1 = __importDefault(require("./routes/user.route"));
var mongoose_1 = __importDefault(require("mongoose"));
var event_route_1 = require("./routes/event.route");
var server = new server_1.Server();
server.app.use(body_parser_1.default.urlencoded({ limit: '5mb', extended: true }));
server.app.use(body_parser_1.default.json({ limit: '5mb' }));
server.app.use(cors_1.default({
    origin: true,
    credentials: true
}));
server.app.use('/user', user_route_1.default);
server.app.use('/event', event_route_1.eventRoutes);
server.start(function () {
    console.log("Server started on port " + server.port);
});
mongoose_1.default.connect('mongodb://localhost:27017/eventsApp', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}, function (err) {
    if (err) {
        console.log("error", err);
        throw err;
    }
    else {
        console.log('Connected');
    }
});
