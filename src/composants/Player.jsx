import React from "react";
 import Card from "react-bootstrap/Card";
// import "../css/Player.css";
import '../App.css';


const Player = ({
  nom,
  équipe,
  nationalité,
  numéroMaillot,
  pied,
  âge,
  image,
}) => {
  return (
    <div >
      <Card className="cards">
        <div className="image_joueur">
          <Card.Img variant="top" src={image} className="image_joueur" />
        </div>
        <div className="details_joueur">
          <Card.Body>
            <Card.Title>{nom}</Card.Title>
            <Card.Text>
            <Card.Img variant="top" src={équipe} className="drapeau_club" />
              <Card.Img variant="top" src={nationalité} className="drapeau_pays" />
              <br />
              Numéro de maillot : {numéroMaillot}
              <br />
              pied : {pied}
              <br />
              Âge : {âge}
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default Player;
