import {useState} from "react";

export default function Player({name, symbol, isActive}) {
    const [Name, setName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function handleClick() {
        setIsEditing((isEditing)=>!isEditing); // Disable editing mode
    }

    function handleInputChange(event) {
        setName(event.target.value); // Update the state with input value
    }

    return (
        <li className={isActive ? 'active': undefined}>
            {isEditing ? (
                <>
                    <span className='player'>
                    <input
                        placeholder="Enter Name"
                        value={Name} // Link input value to state
                        onChange={handleInputChange} // Update state on input change
                    />
                    </span>
                    <span className="player-symbol">{symbol}</span>
                    <button onClick={handleClick}>Save</button>
                </>
            ) : (
                <>
                    <span className='player'>
                    <span className="player-name">{Name}</span>
                    <span className="player-symbol">{symbol}</span>
                    <button onClick={handleClick}>Edit</button>
                    </span>
                </>
            )}

        </li>
    );
}
