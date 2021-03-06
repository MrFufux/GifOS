import './Autocomplete.css';
import { AppContext } from '../../Contexts/AppContext';
import { useContext } from 'react';
import useDarkmode from '../../Hooks/useDarkMode';

function Autocomplete({recommendation}){

    //global states
    const {setSearch, buttonSearch, setButtonSearch} = useContext(AppContext);

    const automaticSearch = () => {
        setSearch(recommendation)
        setButtonSearch(!buttonSearch)
    };

    //darkmode variable
    const autocompDarkMode = useDarkmode("autocomp")
    return (
        <p className={autocompDarkMode} onClick={automaticSearch}>{recommendation}</p>
    );
};

export default Autocomplete;

//className={autocompDarkMode}