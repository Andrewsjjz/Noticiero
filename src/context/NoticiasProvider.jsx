import axios from 'axios'
import { useState, useEffect, createContext } from "react";


const NoticiaContext = createContext()

const NoticiaProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticia] = useState([])

    useEffect (() => {
        const ConsultarApi = async () =>{
            const url = `https://newsapi.org/v2/everything?domains=elmundo.es&
            category=${categoria}&apiKey=9aa63d3647554cf5ac51d0942944280f`

            // https://newsapi.org/v2/everything?domains=elmundo.es&category=${categoria}&apiKey=9aa63d3647554cf5ac51d0942944280f

            const { data } = await axios (url)

            setNoticia(data.articles)
        }
        ConsultarApi()
    }, [categoria])

    const HandleChangeCategoria = e => {
        setCategoria(e.target.value)

    }

  
    return(
        <NoticiaContext.Provider
            value={{
                categoria,
                HandleChangeCategoria,
                noticias
            }}
        >

            {children}
        </NoticiaContext.Provider>
    )
}

export {
    NoticiaProvider

}

export default NoticiaContext