import React, { Component, useState, useEffect,setState } from 'react';

import TeamLogos from '../../data/cleanLogos.json'
import classes from './Teams.css';

class Teams extends Component {

    state = {
        team_list: TeamLogos.teams
    }
    
    sortAscending = () => {
        console.log(...this.state.team_list)
        const name_val = this.state.team_list
        // console.log(this.state.team_list[1].name)
        name_val.sort(function(a,b){
            console.log(a.franchiseId)
            return a.franchiseId - b.franchiseId
        })
        // this.setState
        // this.state.team_list.map(nm => console.log(nm.name))
        this.setState({
            team_list: name_val
        })
        console.log(name_val)
        // name.sort()
        // this.setState({ name })
    }
    
    render() {
        console.log(this.state)
        console.log(this.state.team_list)

        return (
            <div className="teampage">
                {/* <h1>{TeamLogos.teams[0].name}</h1> */}
                <button onClick={this.sortAscending}>HI</button>
                <div className="Teams">
                    {this.state.team_list.map((tm, index) => {
                        return <div className="Player">
                            <h2>{tm.name}</h2>
                            <img src={tm.logo} height="100px" alt="Player Headshot" />
                            <p>{tm.conference}</p>
                            <p>{tm.position}</p>
                        </div>
                    })}
                </div>

            </div>
        );
    }
};


export default Teams;

// TeamLogos.teams.forEach(function(team){