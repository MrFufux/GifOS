/*
Styles
*/
import './App.css';

/*
Components
*/
import Search from './Components/Search/Search';
import Gifs from './Components/GifsResults/GiftResults';
import Header from "./Components/Header/Header";

/**
 * Dependencies
 */
import { AppProvider } from './Contexts/AppContext';



function App() {
  return (
    <AppProvider>
      <div className = "App">
        <Header />
        <Search/>
        <hr/>
        <br/>
        <Gifs />
      </div>
    </AppProvider>
  );
}

export default App;
