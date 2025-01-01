import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function handleSave() {
        setIsEditing(false);
        onChangeName(playerName);
    }

    return (
        <li className={isActive ? "active" : undefined}>
            {isEditing ? (
                <>
                    <span className="player">
                        <input
                            value={playerName}
                            onChange={(e) => setPlayerName(e.target.value)}
                            placeholder="Enter Name"
                        />
                    </span>
                    <span className="player-symbol">{symbol}</span>
                    <button onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    <span className="player">
                        <span className="player-name">{playerName}</span>
                        <span className="player-symbol">{symbol}</span>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    </span>
                </>
            )}
        </li>
    );
}
