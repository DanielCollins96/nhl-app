import React, { Component,useState, useEffect } from 'react';

import TeamLogos from '../../data/cleanLogos.json'
import classes from './Teams.css';

const Teams = () => {

    // console.log(TeamLogos.teams)

    console.log(TeamLogos.teams)
        return (
            <div className="teampage">
                <h1>{TeamLogos.teams.id}</h1>
                <div>
                    {TeamLogos.team}
         
                </div>
  
                
            </div>
        );
    };


export default Teams;

// TeamLogos.teams.forEach(function(team){