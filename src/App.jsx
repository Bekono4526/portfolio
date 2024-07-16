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
        <section id="accueil">
          <About />
        </section>
        <section id="services">
          <Skills />
        </section>
        <section id="services">
         <Portfolio />
        </section>
        <section id="services">
          <Contact />
        </section>
    </main>
    <Footer />
</div>
  );
}

export default App;
