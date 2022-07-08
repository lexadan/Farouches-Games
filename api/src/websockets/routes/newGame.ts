import discordClient from "../../discord";
import { v4 as uuidv4} from 'uuid';
import { Socket } from "socket.io";

export default function newGame(socket: Socket) {
    try {
        const roomId = uuidv4();
        socket.join(roomId);
        discordClient.createNewGame(roomId);
        console.log(roomId);
    } catch (e) {
        console.error(e);
    }
}