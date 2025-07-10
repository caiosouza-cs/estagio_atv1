import React from 'react';
import Logo from './componentes/Logo.jsx';
import Pesquisa from './componentes/Pesquisa.jsx';
import { NavLink } from 'react-router-dom';
import './styles/header.css';
import HeartFilled from './icons/HeartFilled.jsx';

const Header = () => {
  return (
    <section className="cabecalho animaCabecalho">
      <Logo />
      <Pesquisa />
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        <ul
          style={{
            display: 'flex',
            gap: '20px',
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          <li>
            <NavLink to="/" end className="navLink">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="Favoritos" className="navLink">
              Favoritos
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
