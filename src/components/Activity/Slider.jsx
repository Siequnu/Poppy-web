import React from 'react';

import { withStyles, makeStyles } from '@mui/styles';
import Slider from '@mui/material/Slider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 150 + theme.spacing(3) * 2
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
    {
        value: 0,
        label: '😟'
    },
    {
        value: 50,
        label: '😌'
    },
    {
        value: 100,
        label: '🧑‍🎨'
    },
];

const IOSSlider = withStyles({
    root: {
        color: '#213459',
        height: 2,
        padding: '15px 0',
    },
    thumb: {
        height: 28,
        width: 28,
        backgroundColor: '#fff',
        boxShadow: iOSBoxShadow,
        marginTop: -14,
        marginLeft: -14,
        '&:focus, &:hover, &$active': {
            boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: iOSBoxShadow,
            },
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 12px)',
        top: -22,
        '& *': {
            background: 'transparent',
            color: '#000',
        },
    },
    track: {
        height: 2,
    },
    rail: {
        height: 2,
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
    },
    mark: {
        backgroundColor: '#bfbfbf',
        height: 8,
        width: 1,
        marginTop: -3,
    },
    markActive: {
        opacity: 1,
        backgroundColor: '#213459',
    },
})(Slider);
 
export default function FeedbackSlider(props) {
    const { value, onChange} = props;
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <IOSSlider 
                aria-label="How did you feel slider" 
                defaultValue={75} 
                marks={marks} 
                value={value}
                onChange={onChange}
                valueLabelDisplay="off" />
        </div>
    );
}
