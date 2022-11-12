import { useReducer ,createContext } from "react";


export const ToggleContext = createContext()

export const toggleFunction = ( state, action ) => {
    switch (action.type) {
        case "TOGGLE": 
        return { darkMode: !state.darkMode };

        default:
            return state   
    }
}

export const ToggleContextProvider = function( {children} ) {
    const [ state, dispatch ] = useReducer( toggleFunction, {
        darkMode: false
    }  )

    return(
    <ToggleContext.Provider value={ {...state, dispatch} }>
        { children }
    </ToggleContext.Provider>
    )
}