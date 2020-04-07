import React from "react";
import { Card } from "react-bootstrap";
import "../css/cardbook.css";

const CardMain = ({ obj }) => {
  return (
    <Card id="card-h">
      <Card.Body>
        <Card.Text></Card.Text>
        <Card.Text className="title-book">Book </Card.Text>
        <Card.Text className="book">
          <b>{obj.title}</b>
        </Card.Text>
        <Card.Text className="title-aut">Author </Card.Text>
        <Card.Text className="author">
          {obj.author_name ? obj.author_name.toString() : "Not known"}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default CardMain;
