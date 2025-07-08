import React from 'react';
import style from '../styles/Cabecalho.module.css';

const Logo = () => {
  return (
    <div>
      <div className={`${style.logo}  ${style.animaCabecalho}`}>
        Code
        <span className={`${style.logo}  ${style.destaque}`}>Lab</span>
      </div>
    </div>
  );
};

export default Logo;
