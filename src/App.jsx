import React from 'react';
import './App.css';
import Logo from './componentes/Logo';
import Pesquisa from './componentes/Pesquisa';
import Artigos from './componentes/Artigos';
import { GlobalStorage } from './componentes/GlobalContext';

const App = () => {
  return (
    <GlobalStorage>
      <section className="cabecalho animaCabecalho">
        <Logo />
        <Pesquisa />
      </section>

      <section className="navegacao animaCard" id="cards-navegacao">
        <Artigos />
      </section>
    </GlobalStorage>
  );
};

export default App;
