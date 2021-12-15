import React from 'react';
import './HeroList.css';

import ActivityAvatarList from './ActivityAvatarList';

export default function HeroList(props) {
    
    // Split the array in half
    const half = Math.ceil(props.objectives.length / 2);    
    const firstHalf = props.objectives.splice(0, half)
    const secondHalf = props.objectives.splice(-half)

    return (
        <div className="HeroList">
            <h1>{props.title}</h1>
            <div className="HeroListContent">
                <ActivityAvatarList className="ActivityAvatarList" objectives={firstHalf} />
                <ActivityAvatarList className="ActivityAvatarList" objectives={secondHalf} />
            </div>
        </div>
    )
}