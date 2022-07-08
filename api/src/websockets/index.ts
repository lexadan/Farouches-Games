import http from 'http';
import { Server, Socket } from 'socket.io';
import joinGame from './routes/joinGame';
import newGame from './routes/newGame';

class WsServer {
    private io: Server | undefined = undefined;

    init(server: http.Server) {
        this.io = new Server(server, {cors: {
            origin: '*'
        }});

        this.io.on('connection', this.onConnection);
    }

    sendTo(ev: string, msg: any, to: string) {
        this.io?.to(to).emit(ev, msg);
    }

    private onConnection(socket: Socket) {
        console.log('New ws connection');

        socket.on('new game', () => {newGame(socket)});
        socket.on('join game', (msg) => {joinGame(socket, msg)})
    }
}

const WS = new WsServer();

export default WS;