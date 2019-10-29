import React, {Component} from 'react';
import Card from './Card/Card';
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
                        <Card 
                            name={playa.name} 
                            image={playa.image}
                            number={playa.number}
                            position={playa.position}
                            height={playa.height}
                            weight={playa.weight}
                            age={playa.age}/>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default PostList

