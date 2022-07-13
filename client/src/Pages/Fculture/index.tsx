import { useEffect, useState } from "react";
import { GlobalHeader } from "../../Components/headers";
import wsClient from "../../Services/websockets";
import Lobby from "./lobby";

enum GameState {
    LOBBY,
    INGAME,
}

interface GameStateEnv {
    state: GameState;
    args: any;
}

const FcultureHost = () => {

    const [gameState, setGameState] = useState<GameStateEnv>({state: GameState.LOBBY, args: undefined});

    function renderGameState() {
        switch(gameState.state) {
            case GameState.LOBBY:
                return <Lobby />;
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