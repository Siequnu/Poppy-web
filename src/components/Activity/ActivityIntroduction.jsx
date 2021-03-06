import React from "react";
import { Button } from '@mui/material';

import './ActivityIntroduction.css';

export default function ActivityIntroduction(props) {
    return (
        <div className="ActivityIntroduction">
            {(props.activity.thumbnail.split('.').pop() === 'mp4') ? (
                <video className="ActivityVideo" autoPlay muted loop playsInline controls >
                    <source src={`/activities/${props.activityId}/${props.activity.thumbnail}`} type="video/mp4" />
                </video>
            ) : (
                <img src={'/activities/' + (props.activityId) + '/' + props.activity.thumbnail} alt="Header decoration" />
            )}
            <h1>{props.activity.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: props.activity.description }}></p>
            <Button variant="contained" color="primary" onClick={props.handleStartActivity}>
                I'm ready
                </Button>
        </div>
    )
}
