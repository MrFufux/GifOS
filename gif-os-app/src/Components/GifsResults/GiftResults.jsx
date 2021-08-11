/**
 * Styles
 */
import "./GifResults.css";

/**
 * Components
 */
import CardGif from "../CardGifs/CardGif";
import { APIRequest } from "../../Utilities/constants";

/**
 * Others
 */
import { useContext, useEffect } from "react";
import { AppContext } from "../../Contexts/AppContext";
import useDarkmode from "../../Hooks/useDarkMode";

function Gifs() {
  //Global States
  const {
    darkMode,
    search,
    setSearch,
    buttonSearch,
    setButtonSearch,
    textResult,
    setTextResult,
    gif,
    setGif,
    setDataSuggest
  } = useContext(AppContext);

  //Darkmode variable
  const backDarkMode = useDarkmode("gifResult-container")

  const textDarkMode = useDarkmode("gifResult-text-result")

  //useEffect request
  useEffect(() => {
    if (buttonSearch) {
      async function gifsRequest() {
        try {
          setTextResult("Loading Gifs...");
          const respond = await APIRequest(search);
          const data = await respond.json();
          setButtonSearch(false);
          setGif(data.data);
          setDataSuggest([]);
          console.log(data.data);
          if (data.data.length === 0) {
            setTextResult(`Sorry. We haven't find ${search}`);
            console.log(data);
          }
        } catch (error) {
          setSearch("Oops! Something went wrong :c Try again.");
        }
      }
      gifsRequest();
    }
  }, [buttonSearch]);

  //Gif renderized
  const gifRender = gif.map((gifs) => {
    const urlGiphy = gifs.url;
    const urlRender = gifs.images.downsized.url;
    const titleAlt = gifs.title;
    return (
      <CardGif
        key={gifs.id}
        apiURL={urlGiphy}
        localURL={urlRender}
        title={titleAlt}
      />
    );
  });

  //Gifs render conditional
  const renderGifs = gif.length > 0 ? gifRender : <p className={textDarkMode}>{textResult}</p>;
  return <section className={backDarkMode}>{renderGifs}</section>;
}

export default Gifs;
