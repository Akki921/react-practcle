import React from "react";
import "./Sidebar.css";
import "./side.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NoteStates from "../../Context/notes/NotesState";
import About from "../data/About";
import Home from "../data/Home";
import Login from "../data/Login";
import Signup from "../data/Signup";
import Alert from "../data/Alert";

function Sidebar(props) {
  return (
    <>
      <NoteStates>
        <Router>
          <div id="wrapper">
            <div className="overlay"></div>

            {/* <!-- Sidebar --> */}
            <nav
              className="navbar navbar-inverse fixed-top"
              id="sidebar-wrapper"
              role="navigation"
            >
              <ul className="nav sidebar-nav">
                <div className="sidebar-header">
                  <div className="sidebar-brand">
                    <Link to="/home">INoteBOOK </Link>
                  </div>
                </div>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/">Sign iN</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            </nav>
            {/* <!-- /#sidebar-wrapper -->

                <!-- Page Content --> */}
            <div id="page-content-wrapper">
              <button
                type="button"
                className="hamburger animated fadeInLeft is-closed"
                data-toggle="offcanvas"
              >
                <span className="hamb-top"></span>
                <span className="hamb-middle"></span>
                <span className="hamb-bottom"></span>
              </button>
              <div className="container">
                <Alert message="This is Amazing" />
                <div className="row">
                  <Switch>
                    <>
                      <div className="col-lg-12 col-lg-offset-2">
                        <Route exact path="/home">
                          <Home />
                        </Route>
                        <Route exact path="/about">
                          <About />
                        </Route>
                        <Route exact path="/">
                          <Login />
                        </Route>
                        <Route exact path="/signup">
                          <Signup />
                        </Route>
                      </div>
                    </>
                  </Switch>
                </div>
              </div>
            </div>
            {/* <!-- /#page-content-wrapper --> */}
          </div>
          {/* <!-- /#wrapper --> */}
        </Router>
      </NoteStates>
    </>
  );
}

export default Sidebar;
