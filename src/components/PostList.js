import React, {Component} from 'react';
import Card from './Card/Card';
import PostData from '../data/FlamesRecords.json';

import './PostList.css';

class PostList extends Component {
    render(){
        return (
            <div>
                <h1>{PostData.team + ' Would fuck you up'}</h1>
                <div className="Players">
                    {PostData.roster.map((playa, index)=>{
                        return <div className="Player">
                        <Card 
                            name={playa.name} 
                            image={playa.image}
                            number={playa.number}
                            position={playa.position}/>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default PostList

