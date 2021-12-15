import React from 'react';
import './Hero.css';

export default function Hero(props) {

    return (
        <div className="Hero" style={{ backgroundImage: `url("${props.thumbnail}"`}}>
            <div className="HeroContent" style={{'background': `linear-gradient(90deg, rgba(33,52,89,1) 35%, rgba(255,255,255,0) 64%)`}}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>

            </div>
        </div>
    )
}