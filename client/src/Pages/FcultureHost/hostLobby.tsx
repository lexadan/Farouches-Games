import { useEffect, useState } from "react";
import wsClient from "../../Services/websockets";

const HostLobby = () => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        wsClient.on('new player', (msg) => {
            console.log(msg);
            setPlayers(msg.players);
        });
    }, [])
    return (
        <div>
            {
                players.length !== 0 && players.map((player: any) => {
                    return <div key={player.discordId}>{player.username}</div>
                })
            }
        </div>
    );
}

export default HostLobby;