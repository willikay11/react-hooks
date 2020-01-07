import React from 'react';
import ThemeContextProvider from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeToggle from "./components/ThemeToggle";
function App() {
  return (
    <div className="App">
        <ThemeContextProvider>
            <Navbar />
            <BookList />
            <ThemeToggle />
        </ThemeContextProvider>
    </div>
  );
}

export default App;
