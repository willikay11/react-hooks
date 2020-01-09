import React, {createContext, useState} from "react";
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBook] = useState([
        {id: 1, title: 'Art of war'},
        {id: 2, title: 'The alchemist'},
        {id: 3, title: 'The richest man in Babylon'},
    ]);

    return(
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
};

export default BookContextProvider