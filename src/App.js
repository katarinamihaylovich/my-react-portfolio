import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import './App.css';


function App() {
  const [ currentPage, setCurrentPage ] = useState("About");
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "About Me":
        return <About />
      case "Portfolio":
        return <Portfolio />
      case "Home":
        return <Home />
      case "Contact":
        return <Contact />
      default: 
        return <About />
    }
  };
  const handlePageChange = (page) => {
    setCurrentPage(page)
  };
  return (
    <>
      <Header currentPage = {currentPage} handlePageChange = {handlePageChange}></Header>
      {renderCurrentPage()}
      <Footer />
    </>
  );
}

export default App;
