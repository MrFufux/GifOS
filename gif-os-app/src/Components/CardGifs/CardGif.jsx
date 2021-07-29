import React from 'react';
import './CardGif.css'

function CardGif({apiURL, localUrl, title}) {
    return(
        <a className='cardgif-container' href={apiURL} target={"__blank"}>
            <img className = 'cardgif-img' src={localUrl} alt={title}/>
        </a>
    );
};

export default CardGif;