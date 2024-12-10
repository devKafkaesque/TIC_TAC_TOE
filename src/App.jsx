import Player from '/src/components/Player.jsx';
import Gameboard from "./components/Gameboard.jsx";

function App() {
    return <main>
        <div id='game-container'>
            <ol id='players'>
                <Player name= 'Me' symbol= 'O'/>
                <Player name= 'Vishist' symbol= 'X'/>
            </ol>

            GAME BOARD
            <Gameboard name= 'Game' symbol= 'O'/>
        </div>

        LOG
    </main>

}

export default App
