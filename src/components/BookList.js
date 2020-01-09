import React, {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";
import {BookContext} from "../context/BookContext";

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    const theme  = isLightTheme ? light : dark;

    return(
        <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
                { books.map(book => <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>)}
            </ul>
        </div>
    );
};

export default BookList;