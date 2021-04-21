import React from "react"
import './App.css';
import Header from "./containers/header"
import Footer from "./containers/footer"
import SearchMovies from "./containers/searchMovies"


function App() {
  return (
    <>
      <Header/>
      <div className="container" > 
      <SearchMovies/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
