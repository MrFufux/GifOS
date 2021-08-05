import {useContext, useEffect} from 'react';
import { AppContext } from '../../Contexts/AppContext';

import "./GifResults.css";

import CardGif from '../CardGifs/CardGif';

function Gifs(){

    //Global States
    const {darkMode, 
        search, 
        buttonSearch, setButtonSearch,
        textResult, setTextResult
        } = useContext(AppContext);

    
    const backDarkMode = darkMode ? "gifResult-container-dark" : "gifResult-container";
    const textDarkMode = darkMode ? "" : "";
    
    return(
        <div className={backDarkMode}>
            <CardGif
                // key={.}
            />
        </div>
    );
};

export default Gifs;