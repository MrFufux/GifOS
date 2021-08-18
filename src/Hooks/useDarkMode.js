import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";

function useDarkmode(classText) {
    const {darkMode} = useContext(AppContext);
    return darkMode ? `${classText} darkmode` : classText;
}
export default useDarkmode;