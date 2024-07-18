
import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Portfolio from './components/Portfolio.jsx';

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main>
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
