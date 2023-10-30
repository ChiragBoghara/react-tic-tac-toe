import { useState } from "react";

export default function Player({ initialName, symbol, isActive,onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(!isEditing);
    if(isEditing){
      onChangeName(symbol,playerName);
    }
  }

  function handleNameChange(e) {
    setPlayerName(e.target.value);
  }

  let btnCaption = "Edit";

  if (isEditing) {
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleNameChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
