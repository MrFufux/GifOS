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
import {APISuggest} from "../../Utilities/constants";

/**
 * Hooks
 */
import useDarkmode from "../../Hooks/useDarkMode";

function Search(){
    
    //global states
    const {
        darkMode, 
        search, setSearch,
        buttonSearch, setButtonSearch,
        dataSuggest, setDataSuggest,
    } = useContext(AppContext);
    
    //changehandlers
    const searchHandler = (e) => setSearch(e.target.value);
    const buttonSearchHandler = () => setButtonSearch(!buttonSearch);

    //onBlur handler
    const onBlurHandler = () => {
        setTimeout(() => setDataSuggest([]), 400 );
    }
    //Search Enter key function
    const enterKey = (e) => {
        if(e.keyCode === 13){ //Enter key code from https://keycode.info
            setButtonSearch(!buttonSearch);
        }
    }
    
    //Dark Mode Variables
    const backGroundDarkMode = useDarkmode("search-container");
    const h1DarkMode = useDarkmode("search-h1");
    const inputDarkMode = useDarkmode("search-input");
    const buttonDarkMode = useDarkmode("search-button");
    const searchResultDarkMode = useDarkmode("search-h3");
    
    /**
     * UseEffects
    */

    //useEffect suggestions
    useEffect(() => {
        if(search.length > 0) {
            async function suggestion() {
                const respond = await APISuggest(search);
                const ApiData = await respond.json();
                setDataSuggest(ApiData.data)
                // console.log(ApiData);
            }
            suggestion();
        }

    }, [search])

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
                recommendation={recommend.name}
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
                    onKeyDown={enterKey}
                    onChange={searchHandler}
                    onBlur={onBlurHandler}
                />
                <button 
                    className={buttonDarkMode}
                    onClick={buttonSearchHandler}
                    
                >
                    <img className="search-button-img" alt="icon-search" src="/resources/icon-search-mod-noc.svg"/>
                </button>
            </div>
            <div className="auto-complete">{autocompleteComponent}</div>
            <h3 className={searchResultDarkMode}>Search Results</h3>
            <br/>
        </div>
    );
};

export default Search;