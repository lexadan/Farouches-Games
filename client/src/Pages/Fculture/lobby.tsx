import { join } from "path";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FormValidationButton } from "../../Components/Form/Buttons";
import TextInput from "../../Components/Form/textinput";
import { alphaSpaceValidator } from "../../Helpers/validator";
import wsClient from "../../Services/websockets";

const Lobby = () => {
    const [searchParams] = useSearchParams();
    const [lobbyId, setLobbyId] = useState<String | null>("");
    const [discordId, setDiscordId] = useState<String | null>("");
    const [username, setUsername] = useState<String>("");

    useEffect(() => {
        setLobbyId(searchParams.get('lobbyId'));
        setDiscordId(searchParams.get('discordId'));

        wsClient.on('new player', (msg) => {
            console.log(msg);
        });
    }, []);

    function joinLobby() {
        wsClient.emit('join game', {discordId: discordId, lobbyId: lobbyId, username: username});
    }

    return (
        <div>
            <TextInput 
                title="Username"
                validator={alphaSpaceValidator}
                setValue={setUsername}
            />
            <FormValidationButton title="Create Lobby" onClick={joinLobby}/>
        </div>
    );
}

export default Lobby;