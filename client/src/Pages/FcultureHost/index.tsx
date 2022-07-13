import { useEffect, useState } from "react";
import { GlobalHeader } from "../../Components/headers";
import wsClient from "../../Services/websockets";
import HostLobby from "./hostLobby";
import Lobby from "./hostLobby";
import PreLobby from "./prelobby";

enum GameState {
    PRELOBBY,
    LOBBY,
    INGAME,
}

interface GameStateEnv {
    state: GameState;
    args: any;
}

const FcultureHost = () => {

    const [gameState, setGameState] = useState<GameStateEnv>({state: GameState.PRELOBBY, args: undefined});

    function renderGameState() {
        switch(gameState.state) {
            case GameState.PRELOBBY:
                return <PreLobby setLobby={(lobbyName: String, lobbyId: String) => setGameState({state: GameState.LOBBY, args: {lobbyName, lobbyId}})} />;
            case GameState.LOBBY:
                return <HostLobby />;
            case GameState.INGAME:
                break;
        }
    }

    return (
        <div className="w-full">
            <GlobalHeader />
            {renderGameState()}
        </div>
    );
}

export default FcultureHost;