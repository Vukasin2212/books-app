import React, { useState } from "react";
import "./App.css";
import HomePage from "./components/homePage/homePage";
import BookDetails from "./components/bookDetails/bookDetails";
import AuthBook from "./components/authBook";
import ImageImp from "./image/main.jpg";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [image] = useState({
    backgroundImage: `url(${ImageImp})`,
    backgroundAttachment: "fixed"
  });
  return (
    <Router>
      <div className="App" style={image}>
        <Navbar expand="lg" style={{ padding: "30px" }} className="shadowBg">
          <Link className="link-style-h" to="/">
            Books
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto navMain">
              <Link className="link-style" to="/">
                Home
              </Link>
              <Link className="link-style" to="/showbook">
                Book Details
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <AuthBook
              path="/showbook"
              name="BookDetails"
              component={BookDetails}
            />
          </Switch>
        </div>
      </div>{" "}
    </Router>
  );
}

export default App;
