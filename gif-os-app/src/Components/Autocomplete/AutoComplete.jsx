import './Autocomplete.css';
import { AppContext } from '../../Contexts/AppContext';
import { useContext } from 'react';

function Autocomplete({recommendation}){

    //global states
    const {darkMode} = useContext(AppContext);
    const {setSearch} = useContext(AppContext);
    const {buttonSearch, setButtonSearch} = useContext(AppContext);

    const importName = () => {
        setSearch(recommendation)
        setButtonSearch(!buttonSearch)
    };

    //darkmode variable
    const autocompDarkMode = darkMode ? "autocomp-dark" : "autocomp";
    return (
        <div className={autocompDarkMode} onClick={importName}>
            <p>{recommendation}</p>
        </div>
    );
};

export default Autocomplete;