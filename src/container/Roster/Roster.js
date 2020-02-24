import React, {Component} from 'react';

import Auxil from '../../hoc/Auxil/Auxil';

import PostData from '../../data/FlamesRecords.json';

import './Roster.css';

class PostList extends Component {
    state = {
        loaded: false,
        roster: [],
        baseURL: 'https://statsapi.web.nhl.com/api/v1/'
    }

    componentDidMount () {
        console.log("???????")
        fetch(this.state.baseURL + `teams/${this.props.match.params.id}?expand=team.roster`)
        .then((response) => {
            console.log(this.props.match.params)
            console.log('why')
            return response.json()
        })
        .then((res) => {
            console.log(res.teams[0])
            return this.setState({roster: res.teams[0].roster.roster})
            // this.state.teams = res.teams

        })
        .then((updated) => {
            this.setState({loaded: true});
            console.log(this.state.roster);
        })
        .catch((error) => {
            console.log('uhoh', error)
        })
    }


    render(){
        return (
            // <Auxil>
                <div className="playerpage">
                <h1>{PostData.team}</h1>
                <div className="Players">
                    {PostData.roster.map((playa, index)=>{
                        return <div className="Player">
                        <h2>{playa.name}</h2>
                        <img src={playa.image} alt="Player Headshot"/>
                        <p>{playa.number}</p>
                        <p>{playa.position}</p>
                        </div>
                    })}
                </div>
                </div>
            // </Auxil>
        );
    }
}

export default PostList

