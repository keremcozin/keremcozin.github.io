// components/Navbar/navbarElements.js

import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #2A3FFB;
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 0.2rem 0; /* Remove the dynamic padding and set a fixed top and bottom padding */
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #EAB308;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #FFF176;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #F3F0CA;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;