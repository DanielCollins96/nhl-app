import React from 'react';

import NavigationItem from './NavigationItem/NavItem';

const navigationItems = () => (
    <ul>
        <NavigationItem link="/Roster" exact>Roster</NavigationItem>
        <NavigationItem link="/Teams" exact>Teams</NavigationItem>
    </ul>
);

export default navigationItems;