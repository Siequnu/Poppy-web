import React from 'react';
import './PhotoDividerComponent.css';

export default function PhotoDividerComponent(props) {
    return (
        <div 
            className="PhotoDividerComponent" 
            style={{ backgroundImage: `url("${props.thumbnail}"`, height: props.height ? props.height : '200px' }}>

        </div>
    )
}