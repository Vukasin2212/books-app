import React from "react";
import { Card, Row } from "react-bootstrap";
import "../css/cardbook.css";

const CardDetailsAll = ({ obj }) => {
  return (
    <Card id="card-h">
      <Card.Body>
        <Card.Text></Card.Text>
        <Row>
          <Card.Text className="info-card">
            Publisher :
            <b>{obj.publisher ? obj.publisher.toString() : "Not found"}</b>
          </Card.Text>
        </Row>
        <Row>
          <Card.Text className="info-card">
            Contributor :
            <b>{obj.contributor ? obj.contributor.toString() : "Not found"}</b>
          </Card.Text>
        </Row>
        <Row>
          <Card.Text className="info-card">
            Subjects :
            <b>{obj.subject ? obj.subject.toString() : "Not found"}</b>
          </Card.Text>
        </Row>
        <Row>
          <Card.Text className="info-card">
            Publish Year :
            <b>
              {obj.publish_year ? obj.publish_year.toString() : "Not found"}
            </b>
          </Card.Text>
        </Row>
        <Row>
          <Card.Text className="info-card">
            Publish Date :
            <b>
              {obj.publish_date ? obj.publish_date.toString() : "Not found"}
            </b>
          </Card.Text>
        </Row>
        <Row>
          <Card.Text className="info-card">
            First Publish Year :
            <b>
              {obj.first_publish_year
                ? obj.first_publish_year.toString()
                : "Not found"}
            </b>
          </Card.Text>
        </Row>
        <Row>
          <Card.Text className="info-card">
            Language :
            <b>{obj.language ? obj.language.toString() : "Not found"}</b>
          </Card.Text>
        </Row>
        <Row>
          <Card.Text className="info-card">
            eBook : <b>{obj.ebook_count_i ? obj.ebook_count_i : 0}</b>
          </Card.Text>
        </Row>
        <Row>
          <Card.Text className="info-card">
            First Sentence :
            {<b>{obj.first_sentence ? obj.first_sentence : "Not found"}</b>}
          </Card.Text>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default CardDetailsAll;
