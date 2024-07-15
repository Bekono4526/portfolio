import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className=''>
   <Header />
    <main>
        <section id="accueil">
            <h2>Section Accueil</h2>
            <p>Bienvenue sur la page d'accueil de notre site.</p>
        </section>
        <section id="services">
            <h2>Nos Services</h2>
            <p>Description des services que nous offrons.</p>
        </section>
    </main>
    <Footer />
</div>
  );
}

export default App;
