import React from 'react';
import './CardGif.css'

function CardGif({apiURL, localURL, title}) {
    return(
        <a className='cardgif-container' href={apiURL} target="__blank">
            <img className='cardgif-img' src={localURL} alt={title}/>
        </a>
    );
};

export default CardGif;