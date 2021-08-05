import './Autocomplete.css';
import { AppContext } from '../../Contexts/AppContext';
import { useContext } from 'react';

function Autocomplete({recommendation}){

    //global states
    const {darkMode, setSearch, buttonSearch, setButtonSearch} = useContext(AppContext);

    const importName = () => {
        setSearch(recommendation)
        setButtonSearch(!buttonSearch)
    };

    //darkmode variable
    const autocompDarkMode = darkMode ? "autocomp-dark" : "autocomp";
    return (
        <p className={autocompDarkMode} onClick={importName}>
            {recommendation}
        </p>
    );
};

export default Autocomplete;