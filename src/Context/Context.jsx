import { createContext } from "react";

export const MainContext = createContext({
    PageNumber :  0 , 
    ChangePage: () => {},
})