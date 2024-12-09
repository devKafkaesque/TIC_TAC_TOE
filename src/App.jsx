import Player from '/src/components/Player.jsx';

function App() {
    return <main>
        <div id='game-container'>
            <ol id='players'>
                <Player name= 'Me' symbol= 'O'/>
                <Player name= 'Vishist' symbol= 'X'/>
            </ol>
            GAME BOARD
        </div>

        LOG
    </main>

}

export default App
