import React from "react";
import { Card } from "react-bootstrap";
import "../css/cardbook.css";
import { useHistory } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";

const CardBook = ({ data }) => {
  const history = useHistory();
  const DetailsBook = ar => {
    const obj = ar;
    sessionStorage.setItem("bookDetails", JSON.stringify(obj));
    //console.log(obj);
    history.push("/showbook");
  };
  return (
    <div className="row">
      {data.length > 0 ? (
        data.map((ar, i) => {
          return (
            <div className="col-md-3" key={i}>
              <Card id="card-h">
                <Card.Body>
                  <div
                    onClick={() => {
                      DetailsBook(ar);
                    }}
                    className={`item-button`}
                    style={{ position: "absolute", right: "10px", top: "10px" }}
                  >
                    <FaBookOpen
                      style={{
                        color: "white",
                        marginLeft: "2px",
                        width: "22px",
                        height: "22px"
                      }}
                    />
                  </div>
                  <Card.Text></Card.Text>
                  <Card.Text className="title-book">Book </Card.Text>
                  <Card.Text className="book">
                    <b>{ar.title}</b>
                  </Card.Text>

                  <Card.Text className="title-aut">Author </Card.Text>
                  <Card.Text className="author">
                    {ar.author_name ? ar.author_name.toString() : "Not known"}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })
      ) : (
        <h1 style={{ marginLeft: "35px" }}>No Data</h1>
      )}
    </div>
  );
};
export default CardBook;
