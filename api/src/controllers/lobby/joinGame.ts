import discordClient from "../../discord/discord";
import { v4 as uuidv4} from 'uuid';
import { Socket } from "socket.io";
import WS from "../../websockets/websockets";
import redisCLient from "../../redis/redis";

export default async function joinGame(socket: Socket, msg: any) {
    try {
        const roomId = msg.lobbyId;
        const username = msg.username;
        const discordId = msg.discordId;

        if (!roomId || !username || !discordId) {
            console.log('missing roomID or username');
            return;
        }
        socket.join(roomId);
        redisCLient.client.HSET(socket.id, ['username', username, 'discordId', discordId]);
        redisCLient.client.SADD(roomId, socket.id);
        redisCLient.getAllPlayers(roomId).then(players => {
            WS.sendTo('new player', {players: players}, roomId);
        });
        
    } catch (e) {
        console.error(e);
    }
}