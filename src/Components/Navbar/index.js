import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Logo from "../../Assets/Image/Logo.png";

export default function Index() {

  const location = useLocation();

  return (
    
      <Navbar bg="light" expand="xl" fixed="top">
        <div className="container">
          <Link to="/" className="nav-brand">
            <img src={Logo} alt="" style={{ width: "200px" }} />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" to="/about"> 
                <span className={location.pathname.includes("about") ? "nav-active mx-2" : "mx-2"}>About</span>
              </Link>

              <Link className="nav-link" to="/whatwedo">
                <span className={location.pathname.includes("whatwedo") ? "nav-active mx-2" : "mx-2"}>what We do</span>
              </Link>
              <Link to="/howitworks" className="nav-link">
                <span className={location.pathname.includes("howitworks") ? "nav-active mx-2" : "mx-2"}>How we Work</span>
              </Link>
              <Link className="nav-link" to="/team" >
                <span className={location.pathname.includes("team") ? "nav-active mx-2" : "mx-2"}>Team</span>
              </Link>
              <NavDropdown title="Apply" className="nav-active mx-2">
                <Link to="/venturebooth" className="dropdown-item my-1">
                  The Venture Booth
                </Link>
                <Link to="/foundersinresidenceprogram" className="dropdown-item my-1">
                  Founders-in-Residence Program
                </Link>
                <Link to="/mvp" className="dropdown-item my-1">
                  MVP Acclerator Program
                </Link>
                <Link to="/careers" className="dropdown-item my-1">
                  Careers
                </Link>
                <Link to="/pitchdeck" className="dropdown-item my-1">
                  Pitch Deck
                </Link>
                <Link to="/network" className="dropdown-item my-1">
                  The Founders Network
                </Link>
                <Link to="/mentoringprogram" className="dropdown-item my-1">
                  Mentoring Program
                </Link>
              </NavDropdown>
              <NavDropdown title="Media" id="basic-nav-dropdown"  className="nav-active mx-2">
                <a href="https://medium.com/@thefirstfounders" target={"_blank"} className="dropdown-item my-1" rel="noreferrer">Blog</a>
                <Link to="/press" className="dropdown-item my-1">Press</Link>
                <Link to="/event" className="dropdown-item my-1">Event</Link>
              </NavDropdown>
            
              <Link to="/contact" className="nav-link">
                <span className={location.pathname.includes("contact") ? "nav-active mx-2" : "mx-2"}>Contact</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
   
  );
}
