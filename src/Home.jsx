import React from 'react';
import Artigos from './componentes/Artigos';
import './App.css';

const Home = () => {
  return (
    <section className="navegacao" id="cards-navegacao">
      <Artigos />
    </section>
  );
};

export default Home;
