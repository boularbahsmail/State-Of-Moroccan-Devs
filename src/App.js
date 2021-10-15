import React, { useEffect, useState } from 'react';

// Componenst
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import Overview from './components/Overview/Overview';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <center>
      <div className="container">
        <Header />
        <Hero />
        <Overview />
        <Services />
        <Footer />
      </div>
    </center>
  );
}

export default App;
