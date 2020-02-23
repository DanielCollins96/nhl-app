import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Random.css';


class Random extends Component {
    state = {
        loaded: false,
        teams: [],
        baseURL: 'https://statsapi.web.nhl.com/api/v1/'
    }

    componentDidMount () {
        fetch(this.state.baseURL + 'teams')
        .then((response) => {
            // console.log(response)
            return response.json()
        })
        .then((res) => {
            console.log(res.teams)
            return this.setState({teams: res.teams})
            // this.state.teams = res.teams

        })
        .then((updated) => {
            this.setState({loaded: true});
            console.log(this.state.teams);
        })
        .catch((error) => {
            console.log('uhoh', error)
        })
    }
    render(){

        let rosterHandler = (event) => {

        }

        return (
            <div>
                {/* <h1>????</h1> */}
                <div className="rosters">

                {this.state.teams.map((team, index) => { 
                    console.log(team.id)
                    console.log(team.name)
                    return <div className="team">
                            <h3>{team.name}</h3>
                            <a href={team.officialSiteUrl}>Website</a><br></br>
                            <NavLink to={`/Roster/${team.id}`}>Roster</NavLink>
                            </div>
                    
                })}
                </div>
                {/* <ul>{items}</ul> */}
            </div>
            
        )
    }
}

export default Random;