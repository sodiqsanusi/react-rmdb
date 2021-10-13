import { useState, createContext } from "react";


export const globalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [page, setPage] = useState(1);

    return(
      <globalContext.Provider value={ {page, setPage} }>
        {children}
      </globalContext.Provider>
    )
}