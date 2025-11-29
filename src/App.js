import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skill/Skills';
import Services from './components/Service/Services';
import Kualifikasi from './components/Kualifikasi/Kualifikasi';
import Work from './components/Work/Work';
import Testi from './components/Testi/Testi';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';


function App() {
    
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Kualifikasi />
      <Work />
      <Testi />
      <Contact />
      
    </main>

    <Footer />
    <Scrollup />
    </>
  )
}

export default App