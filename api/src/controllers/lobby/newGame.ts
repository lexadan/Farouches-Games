import discordClient from "../../discord/discord";
import { v4 as uuidv4} from 'uuid';
import { Socket } from "socket.io";
import redisCLient from "../../redis/redis";

export default function newGame(socket: Socket, msg: any) {
    try {
        console.log(msg);
        const lobbyId = msg.lobbyId;
        const lobbyName = msg.lobbyName;

        if (!lobbyId || !lobbyName) {
            console.log('Missing lobbyId or LobbyName');
            return;
        }
        socket.join(lobbyId);
        discordClient.createNewGame(lobbyId);
        socket.emit('lobby ready', {lobbyId: lobbyId, lobbyName: lobbyName});
    } catch (e) {
        console.error(e);
    }
}