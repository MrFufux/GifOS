import {useContext, useEffect} from 'react';
import { AppContext } from '../../Contexts/AppContext';

import "./GifResults.css";

import CardGif from '../CardGifs/CardGif';

function Gifs(){

    //Global States
    const {darkMode} = useContext(AppContext);
    const {search} = useContext(AppContext);
    const {buttonSearch, setButtonSearch} = useContext(AppContext);
    const {textResult, setTextResult} = useContext(AppContext);

    // useEffect(()=> {
    //     if (buttonSearch) {
    //         async function gifRequest() {
    //             try{
    //                 setTextResult("Loading... Wait a sec please.")
    //                 const response = await request(search)
    //                 const dataCollect = await response.json()

    //             }
    //         }
    //     }
    // });
    
    const backDarkMode = darkMode ? "gifResult-container-dark" : "gifResult-container";
    const textDarkMode = darkMode ? "" : "";
    return(
        <div className={backDarkMode}>
            <CardGif/>
        </div>
    );
};

export default Gifs;