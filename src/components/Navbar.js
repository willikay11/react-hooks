import React, {Component} from "react";
import {ThemeContext} from "../context/ThemeContext";
import {AuthContext} from "../context/AuthContext";

// Using context in a component. Benefit of this method is it can be used in both functional and class component. Another
// benefit is that it can access multiple contexts

class Navbar extends Component{
    render() {
        return(
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { isAuthenticated, toggleAuth } = authContext;
                    const { isLightTheme, light, dark } = themeContext;
                    const theme  = isLightTheme ? light : dark;

                    return(
                        <nav style={{ background: theme.ui, color: theme.syntax }}>
                            <h1>Context App</h1>
                            <div onClick={toggleAuth}>
                                { isAuthenticated ? 'Logged In' : 'Logged Out'}
                            </div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    );
                }}
                </ThemeContext.Consumer>
            )}</AuthContext.Consumer>
        )
    }
}

export default Navbar;