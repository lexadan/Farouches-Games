import express, { Application, Request, Response, NextFunction } from "express"
import bodyParser from "body-parser"
import baseRouteur from './routes/base';
import userRouteur from './routes/user';
import http from 'http';
import WS from './websockets';

const app: Application = express();
const server: http.Server = http.createServer(app);

WS.init(server);

server.listen(3000, function() {
    console.log('Websocket and http server listneing on port 3000');
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req: Request, res: Response) => {
    res.send("API version 0.1")
})

app.use('/v1', baseRouteur);
app.use('/v1/users', userRouteur);