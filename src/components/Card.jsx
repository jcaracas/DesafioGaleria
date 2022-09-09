import React from "react";
import CardBoot from 'react-bootstrap/Card';


function Card(props) {
  return (
    <div className="carta">
    <CardBoot style={{ width: '18rem' }}>
      <CardBoot.Img  src={props.url}/>
      <CardBoot.Body>
        <CardBoot.Title>{props.title}</CardBoot.Title>
        <CardBoot.Text>{props.description}</CardBoot.Text>
      </CardBoot.Body>
    </CardBoot>
    </div>
  );
}

export default Card;