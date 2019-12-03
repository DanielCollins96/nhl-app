import React, { Component,useState, useEffect } from 'react';

import classes from './Teams.css';

const Teams = () => {

    const [teams, setTeams] = useState({});

    async function fetchData() {
        const res = await fetch("https://statsapi.web.nhl.com/api/v1/teams");
        res
        .json()
        // .then(res => setTeams(res))
        .then(res => res.body)
        .then(console.log(res))
        .catch(err => console.log('errr'))
    }

    useEffect(() => {
        fetchData();
    });




        return (
            <div className="tampage">
                <h1>hi</h1>
                {/* {this.state.map((t,index)=> { */}
                    {/* // return <h2>{t.name}</h2> */}
                {/* })} */}
                {/* <h2>{this.state.teams}</h2> */}
                {/* <h2>{this.state.data.teams.name}</h2> */}
                
            </div>
        );
    };


export default Teams;