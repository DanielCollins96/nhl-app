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
            return a.stat.wins - b.stat.wins
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
    sortDescending = () => {
        console.log(...this.state.team_list)
        const name_val = this.state.team_list
        // console.log(this.state.team_list[1].name)
        name_val.sort(function(a,b){
            console.log(a.franchiseId)
            return  b.stat.wins - a.stat.wins
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
                <button onClick={this.sortAscending}>Ascending</button>
                <button onClick={this.sortDescending}>Descending</button>
                <div className="Teams">
                    {this.state.team_list.map((tm, index) => {
                        return <div className="TeamCard">
                            <h2>{tm.name}</h2>
                            <img src={tm.logo} height="100px" alt="Team Logo" />
                            <ul >
                                <li>GP: {tm.stat.gamesPlayed}</li>
                                <li>W: {tm.stat.wins}</li>
                                <li>L: {tm.stat.losses}</li>
                                <li>GPG: {tm.stat.goalsPerGame}</li>
                                <li>GAPG: {tm.stat.goalsAgainstPerGame}</li>
                            </ul>
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