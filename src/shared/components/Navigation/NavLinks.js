import React,{useContext} from 'react'
import './NavLinks.css';
import { AuthContext } from '../../context/auth-context';
import { NavLink } from 'react-router-dom';
const NavLinks = props => {
    const auth=useContext(AuthContext);
  return (
    <ul className='nav-links'>
        <li>
            <NavLink to='/' exact>ALL USERS</NavLink>
        </li>
        { auth.isLoggedIn &&
        <li>
            <NavLink to='/u1/places'>MY PLACES</NavLink>
        </li>}
        { auth.isLoggedIn &&
        <li>
            <NavLink to='/places/new'>ADD PLACE</NavLink>
        </li>}
        { !auth.isLoggedIn &&
        <li>
            <NavLink to='/auth' exact>AUTHENTICATION</NavLink>
        </li>}

        {auth.isLoggedIn && <li>
            <button onClick={auth.logout}>LOG OUT</button>
        </li> }
    </ul>
  );
}

export default NavLinks;
// This component is for Navigation links in header specifying the route 
// to be where the user must be taken which is exported from here and imported in MainNavigation component