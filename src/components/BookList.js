import React, {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme  = isLightTheme ? light : dark;

    return(
        <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
                <li style={{ background: theme.ui }}>The way of the kings</li>
                <li style={{ background: theme.ui }}>The name of the wind</li>
                <li style={{ background: theme.ui }}>The final empire</li>
            </ul>
        </div>
    );
};

export default BookList;