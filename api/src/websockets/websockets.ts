import http from 'http';
import { Server, Socket } from 'socket.io';
import { setLobbyListener } from '../routes/lobby';
import joinGame from '../controllers/lobby/joinGame';
import newGame from '../controllers/lobby/newGame';

class WsServer {
    private io: Server | undefined = undefined;

    init(server: http.Server) {
        this.io = new Server(server, {cors: {
            origin: '*'
        }});

        this.io.on('connection', this.onConnection);
    }

    sendTo(ev: string, msg: any, to: string) {
        console.log(msg, 'sent to', ev, 'for', to);
        this.io?.to(to).emit(ev, msg);
    }

    on(ev: string, callback: (msg: any) => void) {
        this.io?.on(ev, callback);
    }

    private onConnection(socket: Socket) {
        console.log('New ws connection');

        setLobbyListener(socket);
    }
}

const WS = new WsServer();

export default WS;