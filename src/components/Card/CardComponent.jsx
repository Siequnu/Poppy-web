import React from 'react';
import './CardComponent.css'

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function CardComponent(props) {

    return (
        <div className="cardComponent">
            {props.cards.map((card, i) => (

                <div className="card" key={i} style={{ margin: props.margin }}>

                    <div className="card-image">
                        <img src={card.thumbnail} alt="Header decoration" />
                    </div>

                    <div className="content" style={{ height: props.height ? props.height : '200px' }}>
                        <h4>{card.title}</h4>
                        <p>{card.description}</p>
                    </div>

                    <a href={card.url} target="_blank" rel="noreferrer" className="read-more" style={{ textDecoration: 'none' }}>
                        <span>Buy now <ChevronRightIcon className="chevron-right" /></span>
                    </a>

                </div>
            ))}
        </div>
    )
}

export default CardComponent;