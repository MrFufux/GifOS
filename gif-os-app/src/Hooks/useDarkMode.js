import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";

function useDarkmode(classText) {
    const {darkmode} = useContext(AppContext);
    return darkmode ? `${classText} darkmode` : classText;
}
export default useDarkmode;