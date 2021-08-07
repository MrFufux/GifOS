import {useContext, useEffect} from 'react';
import { AppContext } from '../../Contexts/AppContext';

import "./GifResults.css";


import CardGif from '../CardGifs/CardGif';
import {APIRequest} from '../../Utilities/constants';

function Gifs(){

    //Global States
    const {darkMode, 
        search, setSearch,
        buttonSearch, setButtonSearch,
        textResult, setTextResult,
        gif, setGif,
        setDataSuggest
        
        } = useContext(AppContext);

    
    const backDarkMode = darkMode ? "gifResult-container-dark" : "gifResult-container";

    //useEffect request
    useEffect(()=>{
        if(buttonSearch){
            async function gifsRequest(){
                try{
                    setTextResult("Loading Gifs...")
                    const respond = await APIRequest(search);
                    const data = await respond.json();
                    setDataSuggest([]);
                    setButtonSearch(false);
                    setGif(data.data);
                    if(data.data.length === 0){
                        setTextResult(`Sorry. We haven't find ${search}`)
                        console.log(data);
                    }
                } catch(error){
                    alert('Oops! Something went wrong :c Try again.')
                }
            }
            gifsRequest();
        }
    }, [buttonSearch]);

    const gifRender = gif.map((gifs) => {
        const urlGiphy = gifs.url;
        const urlRender = gifs.images.downsized.url;
        const titleAlt = gifs.title;

        return(
            <CardGif 
                key={gifs.id}
                reditectURL={urlGiphy}
                localURL={urlRender}
                title={titleAlt}
            />
        );
    });

    //Gifs render conditional
     const renderGifs = 
     gif > 0 ? (
        gifRender
     ) : (
         <p>{textResult}</p>
     );
        return <section>{renderGifs}</section>
            
};

export default Gifs;