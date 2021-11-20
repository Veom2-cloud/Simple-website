import React from "react";
import { Nav ,Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <div className="container-fluid  nav_big ">
      <div className="row">
        <div className="col-10 mx-auto ">
          <nav class="navbar navbar-dark bg-primary navbar navbar-expand-lg ">
            <div class="container-fluid">
            <LinkContainer to="/">
            <Navbar.Brand>Internship</Navbar.Brand>
          </LinkContainer>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              ></button>
              <div>
                <ul class="navbar-nav mb-2 mb-lg-0">
                  <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to= '/About'>
                    <Nav.Link >About</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/Contact">
                    <Nav.Link>Contact</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/Service">
                    <Nav.Link>Service</Nav.Link>
                  </LinkContainer>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
