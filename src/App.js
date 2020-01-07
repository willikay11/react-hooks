import React from 'react';
import ThemeContextProvider from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
function App() {
  return (
    <div className="App">
        <ThemeContextProvider>
            <Navbar />
            <BookList />
        </ThemeContextProvider>
    </div>
  );
}

export default App;
