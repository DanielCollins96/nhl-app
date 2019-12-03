import React from 'react';
import { NavLink } from 'react-router-dom';

// import Teams from "../../container/Teams/Teams";
import NavigationItems from '../Navigation/NavigationItems';
import classes from './Header.css';


const header = () => (
  <nav className="navbar">
    {/* <h3>Hockey</h3> */}
    <NavLink exact 
      activeClassName="navlink_active" 
      className="navlink"
      to="/">
        Home
    </NavLink>
    <NavLink 
      activeClassName="navlink_active" 
      className="navlink"
      to="/Roster">
        Roster
    </NavLink>
    <NavLink 
      activeClassName="navlink_active" 
      className="navlink"
      to="/Teams">
        Teams
    </NavLink>
</nav>
);

export default header;



// <header className={classes.Toolbar}>
// <NavigationItems />
// </header>