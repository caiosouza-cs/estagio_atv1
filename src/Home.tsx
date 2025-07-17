import React from 'react';
import Cards from './components/Cards';
import './css/App.css';
import style from './css/Cards.module.css';

const Home = () => {
  return (
    <section className={style.cardsNavegacao}>
      <Cards />
    </section>
  );
};

export default Home;
