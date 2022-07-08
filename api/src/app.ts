import express, { Application, Request, Response, NextFunction } from "express"
import bodyParser from "body-parser"
import http from 'http';
import WS from './websockets/websockets';

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