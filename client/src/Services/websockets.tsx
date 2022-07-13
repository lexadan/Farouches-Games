import {io} from 'socket.io-client';

class WebsocketClient {
    private socket = io("ws://localhost:3000", {
        reconnectionDelayMax: 10000,
    });
    private isConnected: boolean = false;

    constructor() {
        this.socket.on("connect", () => {
            console.log(this.socket.id);
            this.isConnected = true;
        });

        this.socket.on('disconnect', () => {
            this.isConnected = false;
        })
    }

    emit(ev: string, msg: any) {
        if (!this.isConnected) {
            setTimeout(() => this.emit(ev, msg), 2000);
        } else
            this.socket.emit(ev, msg);
    }

    on(ev: string, callback: (msg: any) => void) {
        if (!this.isConnected) {
            setTimeout(() => this.on(ev, callback), 2000);
        } else
            this.socket.on(ev, callback);
    }

    off(ev: string) {
        if (!this.isConnected) {
            setTimeout(() => this.off(ev), 2000);
        } else
            this.socket.off(ev);
    }
}

const wsClient = new WebsocketClient();

export default wsClient;