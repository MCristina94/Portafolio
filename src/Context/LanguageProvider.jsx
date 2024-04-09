import React, {useState, useContext} from "react";

//1. se crea contexto para el idioma
const LanguageContext = React.createContext();

//proveedor del contexto
function LanguageProvider({children}){
    const [language, setLanguage] = useState('english');

    //funcion para cambiar el idioma
    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'english' ? 'spanish' : 'english'));
    };

    //2. proveer el contexto
    return(
        <LanguageContext.Provider value={{language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
}
export { LanguageProvider, LanguageContext };

