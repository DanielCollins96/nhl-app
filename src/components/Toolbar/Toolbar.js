import React from 'react';

// import Teams from "../../container/Teams/Teams";
import NavigationItems from '../Navigation/NavigationItems';
import classes from './Toolbar.css';


const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <NavigationItems />
  </header>
);

export default toolbar;