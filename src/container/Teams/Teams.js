import React, { Component,useState, useEffect } from 'react';

import TeamLogos from '../../data/cleanLogos.json'
import classes from './Teams.css';

const Teams = () => {

    console.log(TeamLogos.teams)

    console.log(TeamLogos.teams)
        return (
            <div className="teampage">
                {/* <h1>{TeamLogos.teams[0].name}</h1> */}
                <div className="Teams">
                    {TeamLogos.teams.map((tm, index)=>{
                        return <div className="Player">
                        <h2>{tm.name}</h2>
                        <img src={tm.logo} height="100px"alt="Player Headshot"/>
                        <p>{tm.conference}</p>
                        <p>{tm.position}</p>
                        </div>
                    })}
                </div>
                
            </div>
        );
    };


export default Teams;

// TeamLogos.teams.forEach(function(team){