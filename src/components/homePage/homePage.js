import React, { useState, useEffect } from "react";
import { GetData } from "../callApi";
import HeaderHome from "./header";
import CardBook from "./card";
import ReactPaginate from "react-paginate";
import "../css/pagination.css";
const HomePage = () => {
  const [dataShow, setDataShow] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [offset, setOff] = useState(0);

  const handlePageClick = e => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;
    setCurrentPage(selectedPage);
    setOff(offset);
  };

  useEffect(() => {
    const CallData = async e => {
      setLoading(true);
      const url =
        "http://openlibrary.org/search.json?q=the+lord+of+the+rings&page=2";

      //getting data from axios --- callApi
      let allData = await GetData(url);

      //search data
      const srchData = allData.docs
        ? allData.docs.filter(rs => {
            return rs.title.toLowerCase().includes(search.toLowerCase());
          })
        : null;
      // for pagination
      const sliceData = srchData.slice(offset, offset + perPage);
      setPageCount(Math.ceil(srchData.length / perPage));

      //setting data for show
      setDataShow(sliceData);
      setLoading(false);
      // console.log(allData);
    };
    CallData();
  }, [search, setSearch, offset, perPage]);

  return (
    <div className="home-main">
      <HeaderHome loading={loading} setSearch={setSearch} />
      <CardBook data={dataShow} />
      <div className="row justify-content-center ">
        <div className=" row justify-content-center">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            forcePage={currentPage}
            containerClassName={"paginationw"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
