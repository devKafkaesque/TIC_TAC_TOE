import Player from '/src/components/Player.jsx';
import Gameboard from "./components/Gameboard.jsx";
import {useState} from "react";

function App() {
    const [activePlayer, setActivePlayer] = useState('X');

    function handleSelectSquare() {
        setActivePlayer((curActivePlayer)=> curActivePlayer==='X' ? 'O' : 'X');
    }

    return <main>
        <div id='game-container'>
            <ol id='players' className='highlight-player'>
                <Player name= 'Me' symbol= 'X' isActive={activePlayer==='X'}/>
                <Player name= 'Vishist' symbol= 'O' isActive={activePlayer==='O'}/>
            </ol>

            GAME BOARD
            <Gameboard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
        </div>

        LOG
    </main>

}

export default App
