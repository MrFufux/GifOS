import {useContext, useEffect} from "react";
import "./Search.css";

import {AppContext} from "../../Contexts/AppContext";



function Search(){

    //global states
    const {darkMode} = useContext(AppContext);
    const {search, setSearch} = useContext(AppContext);
    const {buttonSearch, setButtonSearch} = useContext(AppContext);

    //changehandlers
    const searchHandler = (e) => setSearch(e.target.value);
    const buttonSearchHandler = (e) => setButtonSearch(!buttonSearch);

    

    //Dark Mode Variables
    const backGroundDarkMode = darkMode ? "search-container-darkmode" : "search-container";
    const h1DarkMode = darkMode ? "search-h1-dark" : "search-h1";
    const inputDarkMode = darkMode ? "search-input-dark" : "search-input";
    const searchResultDarkMode = darkMode ? "search-h3" : "search-h3-dark";
    const buttonDarkMode = darkMode ? "search-button-dark" : "search-button";

    useEffect(()=>{
        

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
                <div></div>
            </div>
            <h3 className={searchResultDarkMode}>Search Results</h3>
        </div>
    );
};

export default Search;