import NoticiaContext from "../context/NoticiasProvider";
import { useContext } from "react";

const useNoticias = () => {
    return useContext(NoticiaContext)
}

export default useNoticias