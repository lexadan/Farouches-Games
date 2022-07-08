import discordClient from "../../discord";
import { v4 as uuidv4} from 'uuid';
import { Socket } from "socket.io";
import WS from "..";
import redisCLient from "../../redis";

export default function joinGame(socket: Socket, msg: any) {
    try {
        console.log(msg);
        const roomId = msg.roomId;
        const username = msg.username;
        if (!roomId || !username) {
            console.log('missing roomID or username');
            return;
        }
        socket.join(roomId);
        redisCLient.client.HSET(socket.id, 'username', username);
        redisCLient.client.SADD(roomId, socket.id);
        WS.sendTo('new player', {test: 'test'}, roomId);
        console.log('message sent');
    } catch (e) {
        console.error(e);
    }
}