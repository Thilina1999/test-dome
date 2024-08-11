import React, { useState } from "react";

function CharacterAttributes({ totalPoints }) {
    const [health, setHealth] = useState(0);
    const [stamina, setStamina] = useState(0);
    const [speed, setSpeed] = useState(0);
    const remain = totalPoints - (health + stamina + speed);
    return (
      <div>
        Character stats: <span id="points">{remain}</span> points left.
        <div>
          <input
            type="range"
            id="health"
            min="0"
            max={totalPoints}
            value={health}
            step="1"
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (value + stamina + speed <= totalPoints && (Math.round(totalPoints * 0.7) >=value)) {
                setHealth(value);
              }
            }}
          />
          Health
        </div>
        <div>
          <input
            type="range"
            id="stamina"
            min="0"
            max={totalPoints}
            value={stamina}
            step="1"
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (value + health + speed <= totalPoints && (Math.round(totalPoints * 0.7) >=value)) {
                setStamina(value);
              }
            }}
          />
          Stamina
        </div>
        <div>
          <input
            type="range"
            id="speed"
            min="0"
            max={totalPoints}
            value={speed}
            step="1"
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if ((value + stamina + health <= totalPoints) && (Math.round(totalPoints * 0.7) >=value)) {
                setSpeed(value);
              };
            }}
          />
          Speed
        </div>
      </div>
    );
  }

  export default CharacterAttributes;