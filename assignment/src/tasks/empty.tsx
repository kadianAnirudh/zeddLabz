import React, { createContext } from "react";

type nameProp = {
    children: React.ReactNode
}

const nameContext = createContext('rahil')

export const nameContextProvider = ({children}: nameProp) => {
return (
<nameContext.Provider value={'anirudh'}>
    {children}
</nameContext.Provider>
)}