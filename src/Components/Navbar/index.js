import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  // console.log(props);
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <img src="/assets/Logo2.png" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target="#navbarNav"
            >
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target="#navbarNav"
            >
              <Link className="nav-link" to="/events">
                Events
              </Link>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target="#navbarNav"
            >
              <Link className="nav-link" to="/aboutUs">
                About Us
              </Link>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target="#navbarNav"
            >
              <Link className="nav-link" to="/team">
                Our Team
              </Link>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target="#navbarNav"
            >
              {/* <Link className="nav-link" to="/newsletter">
                Newsletter
              </Link> */}
              <Link
                className="nav-link"
                to={{ pathname: "https://pictmun.github.io/Newsletter/" }}
                target="_blank"
              >
                Newsletter
              </Link>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target="#navbarNav"
            >
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target="#navbarNav"
            >
              <Link className="nav-link" to="/contactUs">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
