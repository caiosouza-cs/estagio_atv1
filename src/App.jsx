import React from 'react';
import './App.css';
import Artigos from './componentes/Artigos';
import { GlobalStorage } from './componentes/GlobalContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Favoritos from './Favoritos';

const App = () => {
  return (
    <GlobalStorage>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
    </GlobalStorage>
  );
  2;
};

export default App;
