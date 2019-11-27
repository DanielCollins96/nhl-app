import React from 'react';
import { NavLink } from 'react-router-dom';

// import Teams from "../../container/Teams/Teams";
import NavigationItems from '../Navigation/NavigationItems';
import classes from './Header.css';


const toolbar = () => (
  <nav>
  <NavLink exact activeClassName="active" to="/">
    Home
  </NavLink>
  <NavLink activeClassName="active" to="/Roster">
    Roster
  </NavLink>
  <NavLink activeClassName="active" to="/Teams">
    Teams
  </NavLink>
</nav>
);

export default toolbar;



// <header className={classes.Toolbar}>
// <NavigationItems />
// </header>