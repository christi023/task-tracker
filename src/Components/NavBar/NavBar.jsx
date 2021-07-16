import React from 'react';
import navData from '../../data/NavData';
import { NavLink } from 'react-router-dom';

import { Navbar, Nav, Container } from 'react-bootstrap';

// styles
import './Navbar.css';

export default function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="dark" expand="lg" collapseOnSelect className="navbar-fixed-top">
        <Container>
          <Navbar.Brand>
            <NavLink to="/">
              <span className="navbar-brand font-weight-bolder">Task Tracker</span>
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {navData.map((item, i) => (
                <NavLink
                  to={item.link}
                  key={i}
                  className="nav-menu-links"
                  activeClassName="active_class"
                >
                  {item.title}
                </NavLink>
              ))}
              <br />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
