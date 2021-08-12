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
import useDarkmode from '../../Hooks/useDarkMode';


function Header(){
    //global state
    const {darkMode, setDarkMode} = useContext(AppContext);

    //Dark Mode variables
    const backDarkMode = useDarkmode("header-container")
    const buttonDarkMode = useDarkmode("header-container-button")

    console.log(backDarkMode);
    //event theme handler
    const setThemeHandler = () => setDarkMode(!darkMode);
    return(
        <div className={backDarkMode}>
            <img
                src={darkMode ? "/resources/logo-mobile-modo-noct.svg" : "/resources/logo-desktop.svg"}
                alt='GifOS logo'
                className="header-container-img"
            />
            <button 
                onClick={setThemeHandler} 
                className={buttonDarkMode}>
                {darkMode ? 'Light' : 'Dark'} Mode
            </button>
        </div>
    );
}



export default Header;