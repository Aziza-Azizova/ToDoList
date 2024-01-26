import { createContext, useEffect, useState } from "react";
import { ru, uz } from '../language';

export const Context = createContext();

function ContextProvider({ children }) {
    const [lang, setLang] = useState(ru);
    const [flag, setFlag] = useState(true);
    const [notes, setNotes] = useState([
        {
            id: 1,
            title: 'React.js',
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, in!",
            date: new Date().toLocaleDateString()
        },
        {
            id: 2,
            title: 'Angular.js',
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, in!",
            date: new Date().toLocaleDateString()
        },
        {
            id: 3,
            title: 'Vue.js',
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, in!",
            date: new Date().toLocaleDateString()
        },
    ])

    function changeLang(til) {
        til === 'uz' ? setLang(ru) : setLang(uz);
        setFlag(!flag);
    }


    return (
        <Context.Provider value={{ lang, changeLang, flag, notes }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider