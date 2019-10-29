import React, {Component} from 'react';

import './Card.css'
import { tsParenthesizedType } from '@babel/types';

class Card extends Component {
    state = {
        showStats: false
    }

    constructor(props){
        super(props);
        this.handleStatsClick = this.handleStatsClick.bind(this);
    }
    handleStatsClick() {
        const doesShow = this.state.showStats;
        this.setState({
            showStats: !doesShow
        });
    }

    render() {
        let bodyContent;
        if (this.state.showStats) {
          bodyContent = (  
            <span>
                <ul>
                    <li>{this.props.weight}</li>
                    <li>{this.props.height}</li>
                    <li>{this.props.age}</li>
                </ul>
            </span>
          )
        } else{
            bodyContent = (
                <img src={this.props.image} alt="Player Headshot"/>
            )
        }
    


    return (
    <div className="card">
        <div className='header'>
            <div className="medal">
                {/* Logo */}
                <strong>{this.props.number}</strong>
                <strong>{this.props.position}</strong> 
            </div>
                <h2 className="Playername">{this.props.name.split(' ')}</h2>
        </div>
        <div className="card-body">
            {bodyContent}
        </div>
        <div className="footer">
            <ul>
                <li onClick={this.handleStatsClick}>Stats</li>
                <li>Highlights</li>
            </ul>
        </div>
    </div>
    )
}
}
export default Card;