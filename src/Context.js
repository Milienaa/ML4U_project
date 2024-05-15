import { createContext } from "react";
import useModal from "./Hooks/useModal";

export const AppContext = createContext();

const Context = ({ children }) => {
    //modal Window state
    const [modal, handlerOpen, handlerClose] = useModal();

    //Login Window
    const getLoginData = (e, p) =>{
        let userData = {
            email: e,
            password: p
        }
        console.log(userData);
    }
    
    const value = {modal, handlerOpen, handlerClose, getLoginData}

    console.log(modal);
    return (
        <AppContext.Provider value={value}> {children}
            
        </AppContext.Provider>
    )
}

export default Context;
