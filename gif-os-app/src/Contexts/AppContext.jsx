/*
 * Dependencies 
 * */
import { createContext, useState } from "react";


//context
const AppContext = createContext();

/*
 * Provider Wrapper
 */
function AppProvider({children}){

    //states
    const [darkMode, setDarkMode] = useState(false);
    const [search, setSearch] = useState('');
    const [buttonSearch, setButtonSearch] = useState(false)
    const [textResult, setTextResult] = useState('Do your Gif searches');
    return(
        <AppContext.Provider value={{
            darkMode, 
            setDarkMode,
            search,
            setSearch,
            buttonSearch,
            setButtonSearch,
            textResult,
            setTextResult
            
            }}>
            {children}
        </AppContext.Provider>
    );

};

export {AppProvider, AppContext};
