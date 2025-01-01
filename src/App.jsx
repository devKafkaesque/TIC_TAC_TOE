import { useState } from "react";
import Player from "./components/Player.jsx";
import Gameboard from "./components/Gameboard.jsx";
import Log from "./components/Log.jsx";

function App() {
    const [activePlayer, setActivePlayer] = useState('X');
    const [playerNames, setPlayerNames] = useState({ X: 'Me', O: 'Vishist' });

    function handleSelectSquare() {
        setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
    }

    function handleNameChange(symbol, newName) {
        setPlayerNames((prevNames) => ({ ...prevNames, [symbol]: newName }));
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        name={playerNames['X']}
                        symbol="X"
                        isActive={activePlayer === 'X'}
                        onChangeName={(newName) => handleNameChange('X', newName)}
                    />
                    <Player
                        name={playerNames['O']}
                        symbol="O"
                        isActive={activePlayer === 'O'}
                        onChangeName={(newName) => handleNameChange('O', newName)}
                    />
                </ol>

                <Gameboard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
            </div>
            <Log />
        </main>
    );
}

export default App;
