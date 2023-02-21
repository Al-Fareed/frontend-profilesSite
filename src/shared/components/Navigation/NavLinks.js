import React from 'react'
import './NavLinks.css';
import { NavLink } from 'react-router-dom';
const NavLinks = props => {
  return (
    <ul className='nav-links'>
        <li>
            <NavLink to='/' exact>ALL USERS</NavLink>
        </li>
        <li>
            <NavLink to='/u1/places'>MY PLACES</NavLink>
        </li>
        <li>
            <NavLink to='/places/new'>ADD PLACE</NavLink>
        </li>
        <li>
            <NavLink to='/auth'>AUTHENTICATION</NavLink>
        </li>
    </ul>
  );
}

export default NavLinks;
// This component is for Navigation links in header specifying the route 
// to be where the user must be taken which is exported from here and imported in MainNavigation component