import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Link as Link2 } from "react-scroll";
import { HashLink as Link3 } from "react-router-hash-link";
// import { useLocation } from "react-router-dom";

import Logo from "../../Assets/Image/Logo.png";

export default function Index() {
  // const location = useLocation();
  return (
    <div>
      <Navbar bg="light" expand="xl" fixed="top">
        <Container fluid>
          <Link to="/" className="nav-brand">
            <img src={Logo} alt="" style={{ width: "200px" }} />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link3 to="/#startup" className="nav-link">
                Startups
              </Link3>

              <Link className="nav-link" to="/about"> 
                About
              </Link>

              <Link className="nav-link" to="/whatwedo">
                what We do
              </Link>
              <Link to="/howitworks" className="nav-link">
                How we Work
              </Link>
              <NavDropdown title="Apply" id="basic-nav-dropdown">
                <Link to="/venturebooth" class="dropdown-item">
                  The Venture Booth
                </Link>
                <Link to="/foundersinresidenceprogram" class="dropdown-item">
                  Founders-in-Residence Program
                </Link>
                <Link to="/mvp" class="dropdown-item">
                  MVP Acclerator Program
                </Link>
                <Link to="/careers" class="dropdown-item">
                  Careers
                </Link>
                <Link to="/mentoringprogram" class="dropdown-item">
                  Firstfounders Mentoring Program
                </Link>
              </NavDropdown>
              <NavDropdown title="Media" id="basic-nav-dropdown">
                <a href="https://medium.com/@thefirstfounders" target={"_blank"} class="dropdown-item" rel="noreferrer">
                  Blog
                </a>
                <Link to="/press" class="dropdown-item">
                  Press
                </Link>
                {/* <Link to="/blog" class="dropdown-item">
                  Event
                </Link> */}
              </NavDropdown>
              <Link3 className="nav-link" to="/#team">
                team
              </Link3>

              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
