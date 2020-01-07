import React, {Component} from "react";
import {ThemeContext} from "../context/ThemeContext";

// Using context in a component. Benefit of this method is it can be used in both functional and class component. Another
// benefit is that it can access multiple contexts

class Navbar extends Component{
    render() {
        return(
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme  = isLightTheme ? light : dark;

                return(
                    <nav style={{ background: theme.ui, color: theme.syntax }}>
                        <h1>Context App</h1>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                );
            }}
            </ThemeContext.Consumer>
        )
    }
}

export default Navbar;