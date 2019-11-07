import React, {Component} from 'react';
import Card from './Card/Card';
import PostData from '../data/FlamesRecords.json';

import './PostList.css';

class PostList extends Component {
    render(){
         const dog = Object.entries(PostData)

        console.log(Object.entries(PostData))
        // console.log(dog)
        return (
            <div>
                <h1>{PostData.team}</h1>
                <div className="Players">
                    {PostData.roster.map((playa, index)=>{
                        return <div >
                        <Card 
                            yolo={[...dog]}
                            name={playa.name} 
                            firstname={playa.firstname} 
                            lastname={playa.lastname} 
                            image={playa.image}
                            number={playa.number}
                            position={playa.position}
                            height={playa.height}
                            weight={playa.weight}
                            logo={PostData.logo}
                             age={playa.age}
                            />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default PostList

