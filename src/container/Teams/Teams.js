import React, { Component, useState, useEffect,setState } from 'react';

import TeamLogos from '../../data/cleanLogos.json'
import axios from '../../axios-orders';

import classes from './Teams.css';

class Teams extends Component {

    // TeamLogos.teams
    state = {
        team_list: TeamLogos.teams,
        dateId: '2020-02-17',
        activeButton: 'wins',
        error: false
    }
    // https://hockeydata-e277a.firebaseio.com/teamstats/2019-12-15
    componentDidMount () {
        axios.get( `teamstats/${this.state.dateId}.json` )
            .then( response => {
                console.log(typeof response)
                this.setState( { team_list: response.data.teams } );
                // this.state.team_list.stat.map(t => console.log(t))
                console.log("???")
                console.log(this.state.team_list[29])
                // console.log(this.state.team_list)
                this.state.team_list.forEach((t) => {
                    console.log(t.stat)
                    t.stat.forEach((statTeam) => {
                        console.log(statTeam)
                    })
                })
                // for (let t of this.state.team_list){
                //     // for (let st of t){
                //     //     console.log(st)
                //     // }
                    
                // }
            } )
            .catch( error => {
                this.setState( { error: true } );
                console.log(error)
            } );
    }

    sortAscending = () => {
        // console.log(...this.state.team_list)
        const name_val = this.state.team_list
        console.log(this.state.team_list)
        const sort_val = this.state.activeButton
        console.log(this.state.activeButton)
        name_val.sort(function(a,b){

            return a.stat.sort_val - b.stat.sort_val
        })

        this.setState({
            team_list: name_val
        })

    }
    sortDescending = () => {
        // console.log(...this.state.team_list)
        const name_val = this.state.team_list
        const sort_val = this.state.activeButton
        // console.log(this.state.team_list[1].name)
        name_val.sort(function(a,b){
            // console.log(a.franchiseId)
            return  b.stat.sort_val - a.stat.sort_val
        })

        this.setState({
            team_list: name_val
        })

    }

    dateHandler = (event) => {
        // this.setState({dateId: event.target.value})
    }
    
    render() {
        // console.log(this.state)
        // console.log(this.state.team_list)

        return (
            <div className="teampage">
                <div>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <button onClick={this.sortAscending}>Ascending</button>
                <button onClick={this.sortDescending}>Descending</button>
                {/* <p>{this.state.dateId}</p> */}
                <input type="text" name="date" value={this.state.dateId} onChange={this.dateHandler}></input>
                <div className="Teams">
                    {this.state.team_list.map((tm, index) => {
                        return <div className="TeamCard" key={index}>
                            <h2>{tm.name}</h2>
                            <img src={tm.logo} height="100px" alt="Team Logo" />
                            <div id="stats">
                            <div>
                            <ul >
                                <li>GP: {tm.stat.gamesPlayed}</li>
                                <li>W: {tm.stat.wins}</li>
                                <li>L: {tm.stat.losses}</li>
                                <li>GPG: {tm.stat.goalsPerGame}</li>
                                <li>GAPG: {tm.stat.goalsAgainstPerGame}</li>
                            </ul>
                            </div>
                            <div>
                                <p id="statListVal"></p>
                                {/* {tm.stat.map((t) => console.log(t))} */}
                                {/* <select name="country" value={tm.stat}>
                                 {tm.stat.map((e, key) => {
                                    return <option key={key} value={e.value}>{e.name}</option>;
                                   })}
                                </select> */}
                            </div>
                            </div>
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