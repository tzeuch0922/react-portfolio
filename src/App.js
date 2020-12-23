import './App.css';
import React, { useState } from 'react';
import AboutMe from './components/About Me';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() 
{
  // const categories = 
  // [
  //   "About Me",
  //   "Contact",
  //   "Portfolio",
  //   "Resume"
  // ]

  const [currentCategory, setCurrentCategory] = useState("About Me");

  return (
    <>
      <section className="hero secondary">

        <div className="hero-foot mt-3">
          <Nav currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></Nav>
        </div>
      </section>
      <div className="App">
        <main>
          {currentCategory === "About Me" && <AboutMe></AboutMe>}
          {currentCategory === "Portfolio" && <Portfolio></Portfolio>}
          {currentCategory === "Contact" && <Contact></Contact>}
          {currentCategory === "Resume" && <Resume></Resume>}
        </main>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;