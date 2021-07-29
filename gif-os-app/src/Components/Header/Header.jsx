/**
 * Dependencies
 */
import {useContext} from 'react';

/* 
 * Styles 
*/
import "./Header.css";
import "../../App.css";

/**
 * Others
 */
import { AppContext } from '../../Contexts/AppContext';


function Header(){
    //global state
    const {darkMode, setDarkMode} = useContext(AppContext);

    //event theme handler
    const setThemeHandler = (e) => setDarkMode(!darkMode);
    return(
        <div className={darkMode ? "header-dark": "header-container"}>
            <img
                src={darkMode ? "/resources/logo-mobile-modo-noct.svg" : "/resources/logo-desktop.svg"}
                alt='GifOS logo'
                className="header-container-img"
            />
            <button 
                onClick={setThemeHandler} 
                className={darkMode ? "dark-header-container-button" : "header-container-button"}>
                {darkMode ? 'Light' : 'Dark'} Mode
            </button>
        </div>
    );
}



export default Header;