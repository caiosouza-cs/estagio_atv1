import React from 'react';
import Logo from './icons/Logo.js';
import Search from './components/Search.js';
import { NavLink } from 'react-router-dom';
import style from './css/Header.module.css';
import './css/header.css';

const Header = () => {
  return (
    <section className={`${style.cabecalho} ${style.animaCabecalho}`}>
      <Logo />
      <Search />
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
              Favoritos <span>❤</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
