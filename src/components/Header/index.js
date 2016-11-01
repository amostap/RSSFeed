import React, { Component, PropTypes } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router';

export class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="">RSS</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <li role="presentation">
              <Link to="/">
                <span className="glyphicon glyphicon-home" aria-hidden="true" />
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
