import React from "react";
import CardMain from "./cardDet";
import CardDetailsAll from "./cardDetAll";
const BookDetails = () => {
  const bookData = JSON.parse(sessionStorage.getItem("bookDetails"));

  return (
    <div className="home-main">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4">
            <CardMain obj={bookData} />
          </div>
          <div className="col-md-6">
            <CardDetailsAll obj={bookData} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookDetails;
