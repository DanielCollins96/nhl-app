import React, {Component} from 'react';

import Auxil from '../../hoc/Auxil/Auxil';

import PostData from '../../data/FlamesRecords.json';

import './Roster.css';

class PostList extends Component {
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

