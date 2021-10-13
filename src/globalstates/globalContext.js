// A CONTEXT API THAT ALLOWS ME TO USE STATES THAT CAN 
// BE AVAILABLE TO ALL COMPONENTS REGARDLESS OF HOW DEEP 
// IN THE COMPONENT TREE THEY ARE WITHOUT PROP DRILLING:

// THE CREATECONTEXT HOOK IS IMPORTANT TO INITIALIZE A CONTEXT PROVIDER
import { useState, createContext } from "react";

// INITIALIZING A GLOBAL CONTEXT, YOU DON'T HAVE TO DO ANYTHING HERE 
// JUST ASSIGN A VALUE TO THE CREATECONTEXT HOOK FUNCTION

export const globalContext = createContext();

// THE PROVIDER IS WHERE ALL STATE TO BE USED GOES IN, IT IS ALSO GOING 
// TO TAKE IN PROPS SO THE CHILDREN COMPONENTS CAN BE DESTRUCTURED OUT
export const GlobalProvider = ({children}) => {
    const [page, setPage] = useState(1);

    return(
      <globalContext.Provider value={ {page, setPage} }>
        {children}
      </globalContext.Provider>
    )
}