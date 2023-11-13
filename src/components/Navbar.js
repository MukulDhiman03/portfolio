import React from "react";
import { Link } from "react-router-dom";

import Home from "./Home";
const Navbar = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-5 mt-3" id="logo">
          <p>Mukul Dhiman</p>
        </div>
        <div className="col-5 mt-3">
          <ul className="nav_links">
            <li>
              <Link to="/" className="your-link-class">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" className="your-link-class">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="your-link-class">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/project" className="your-link-class">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
