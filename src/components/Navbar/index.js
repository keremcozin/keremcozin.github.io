// components/Navbar/index.js

import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./navbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;