import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import { GlobalContext } from './componentes/GlobalContext.jsx';
import Logo from './componentes/Logo.jsx';
import Pesquisa from './componentes/Pesquisa.jsx';

import './styles/header.css';
import Logout from './componentes/Logout.jsx';


const Header = () => {
  const {session} = useContext(GlobalContext)

  console.log('session: ', session)

  return (
    <section className="cabecalho animaCabecalho">
      <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", padding: "12px 0"}}>
        <Logo />

        <div>
          {
            session ? 
            <>
              <p>Bem vindo, {session.user.email}</p> 
              <Logout />
            </>
              :
            <NavLink to="/login">Login</NavLink>
          }
        </div>
      </div>
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
              Favoritos <span>❤</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
