import React, { useState } from "react";
import "../css/home.css";
import ClipLoader from "react-spinners/ClipLoader";
import { Row, Col } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
const HeaderHome = ({ setSearch, loading }) => {
  const [srch, setSrch] = useState("");
  const handlechan = e => {
    setSrch(e.target.value);
    if (e.target.value === "") {
      setSearch("");
    }
  };
  const SearchStart = () => {
    setSearch(srch);
  };

  return (
    <div className="col-md-12 header-home" style={{ marginBottom: "40px" }}>
      <Row>
        <Col xs={4}>
          <input
            className="input-search"
            placeholder="Search"
            value={srch}
            onChange={handlechan}
          />
        </Col>
        <Col xs={1}>
          <FiSearch onClick={SearchStart} className="icon-header " />
        </Col>
        <Col xs={1}>
          <ClipLoader size={40} color={"black"} loading={loading} />
        </Col>
      </Row>
    </div>
  );
};

export default HeaderHome;
