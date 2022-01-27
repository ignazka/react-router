import React from "react";
import { Navbar, Nav, NavbarBrand, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar color="dark" container="md" dark>
      <NavbarBrand>React Router</NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink className="inactive">
            <Link className="inactive" to="/">
              Home
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="inactive">
            <Link className="inactive" to="about">
              About
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="inactive">
            <Link className="inactive" to="cats">
              Cats
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="inactive">
            <Link className="inactive" to="dogs">
              Dogs
            </Link>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
