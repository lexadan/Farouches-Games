import { useEffect, useState } from "react";
import { FormValidationButton } from "../../Components/Form/Buttons";
import TextInput from "../../Components/Form/textinput";
import { makeid } from "../../Helpers/makeId";
import { alphaSpaceValidator } from "../../Helpers/validator";
import wsClient from "../../Services/websockets";

interface Props {
    setLobby: (lobbyName: String, lobbyId: String) => void;
}

const PreLobby = (props: Props) => {
    const {setLobby} = props;
    const [lobbyName, setLobbyName] = useState<String>("Lobby");

    useEffect(() => {
        wsClient.on('lobby ready', (msg) => {
            setLobby(msg.lobbyName, msg.lobbyId)
        })
    }, []);

    function createLobby() {
        var code = makeid(4);
        wsClient.emit('new game', {lobbyId: code, lobbyName: lobbyName});
    }

    return (
        <>
            <div className="text-3xl font-bold underline">PreLobby</div>
            <TextInput 
                title="Lobby Name"
                validator={alphaSpaceValidator}
                setValue={setLobbyName}
            />
            <FormValidationButton title="Create Lobby" onClick={createLobby}/>
        </>
    );
}

export default PreLobby;