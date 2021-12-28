import React from 'react';
import './Hero.css';

import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Hero(props) {

    return (
        <div className="Hero" style={{ backgroundImage: `url("${props.thumbnail}"` }}>
            <div className="HeroContent" style={{ 'background': `linear-gradient(90deg, rgba(200,34,130,1) 35%, rgba(255,255,255,0) 64%)` }}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>

                {
                    props.comingSoon ?
                        <span className="stamp is-nope">Coming soon</span>
                        :
                        <Button component={Link} to={props.link} size="Large" style={{ margin: '10px' }} variant="contained" endIcon={<ChevronRightIcon />}> View collection</Button>
                }
            </div>
        </div>
    )
}