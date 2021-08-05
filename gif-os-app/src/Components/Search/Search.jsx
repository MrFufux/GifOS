/** 
 * Dependencies
 */
import {useContext, useEffect} from "react";

/** *
 * Styles
 */
import "./Search.css";
import "../Autocomplete/Autocomplete.css";

/** *
 * Others
 */
import {AppContext} from "../../Contexts/AppContext";

import Autocomplete from "../Autocomplete/AutoComplete";

import {APIRequest, APISuggest} from "../../Utilities/constants";


function Search(){
    
    //global states
    const {
        darkMode, 
        search, setSearch,
        textResult, setTextResult,
        buttonSearch, setButtonSearch,
        dataSuggest, setDataSuggest
    } = useContext(AppContext);
    
    //changehandlers
    const searchHandler = (e) => setSearch(e.target.value);
    const buttonSearchHandler = () => setButtonSearch(!buttonSearch);
    
    //Dark Mode Variables
    const backGroundDarkMode = darkMode ? "search-container-darkmode" : "search-container";
    const h1DarkMode = darkMode ? "search-h1-dark" : "search-h1";
    const inputDarkMode = darkMode ? "search-input-dark" : "search-input";
    const searchResultDarkMode = darkMode ? "search-h3" : "search-h3-dark";
    const buttonDarkMode = darkMode ? "search-button-dark" : "search-button";
    const autocompleteDarkMode = darkMode ? "autocomp-dark" : "autocomp";
    
    /**
     * UseEffects
    */

    //useEffect request
    useEffect(()=>{
        if(buttonSearch){
            async function gifsRequest(){
                try{
                    setTextResult("Loading Gifs...")
                    const respond = await APIRequest(search)
                    const data = await respond.json()
                    setDataSuggest([])
                    setButtonSearch(false)
                    if(data.data.length === 0){
                        setTextResult(`Sorry. We haven't find ${search}`)
                    }
                } catch(error){
                    alert('Oops! Something went wrong :c Try again.')
                }
            }
            gifsRequest()
        }
    }, [buttonSearch])

    //useEffect suggestions
    useEffect(()=>{
        if(textResult && search.length > 0) {
            async function suggestion() {
                const respond = await APISuggest(search);
                const ApiData = await respond.json();
                setDataSuggest(ApiData.data)
                console.log(ApiData);
            }
            suggestion();
        }

    }, [textResult, search])

    //Empty suggest remover
    useEffect(()=> {
        if(search.length < 1) {
            setDataSuggest([])
        }
    }, [search])

    //Suggestions render
    const autocompleteComponent = dataSuggest.map((recommend) => {
        return(
            <Autocomplete 
                key={recommend.analytics_response_payload}
                name={recommend.name}
            />
        );
    })

    return(
        <div className={backGroundDarkMode}>
            <div>
                <div className="search-h1-img">
                    <h1 className={h1DarkMode}>Inspire yourself and search the best GIFS!</h1>
                    <img src='/resources/ilustra_header.svg' alt='friends pic' />
                </div>
            </div>
            <div className='search-div'>
                <input 
                    className={inputDarkMode} 
                    type="text" 
                    value={search}
                    placeholder="Gif Search"
                    onChange={searchHandler}
                />
                <button 
                    className={buttonDarkMode}
                    onClick={buttonSearchHandler}
                    
                >
                    <img className="search-button-img" alt="icon-search" src="/resources/icon-search-mod-noc.svg"/>
                </button>
                <div className={autocompleteDarkMode}>{autocompleteComponent}</div>
            </div>
            <h3 className={searchResultDarkMode}>Search Results</h3>
        </div>
    );
};

export default Search;