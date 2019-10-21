import React, {Component} from 'react';
import PostData from '../data/FlamesRecords.json';

import './PostList.css';

class PostList extends Component {
    render(){
        return (
            <div>
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
        )
    }
}

export default PostList

