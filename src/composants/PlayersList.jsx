import React from "react";
import Player from "./Player";
import players from "./Players";
// import '../css/Player.css'

const PlayersList = () => {
  return (
    <div className="carte">
      {players.map((player, index) => (
        <Player
          key={index}
          nom={player.nom}
          équipe={player.équipe}
          nationalité={player.nationalité}
          numéroMaillot={player.numéroMaillot}
          âge={player.âge}
          pied={player.pied}
          image={player.image}
        />
      ))}
    </div>
  );
};

export default PlayersList;