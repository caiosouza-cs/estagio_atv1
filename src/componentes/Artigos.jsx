import React from 'react';
import Data from './Data';
import Modal from './Modal';
import { GlobalContext } from './GlobalContext';
import Like from './Like';

import style from '../styles/Cards.module.css';

const Artigos = () => {
  const { posts } = React.useContext(GlobalContext);
  const [modalAberto, setModalAberto] = React.useState(false);
  const [postSelecionado, setPostSelecionado] = React.useState(null);

  function abrirModal(post) {
    setModalAberto(true);
    setPostSelecionado(post);
  }

  function fecharModal() {
    setModalAberto(false);
    setPostSelecionado(null);
  }

  return (
    <>
      {posts.map((post, indice) => (
        <div
          className={`${style['card-principal']} ${style.animaCard}`}
          key={indice}
          // onClick={() => abrirModal(post)}
        >
          <Data novaData={post.data} />
          <Like className={style.like} id={post.id} />
          <section>
            <h2 className={style.titulo}>{post.titulo}</h2>
            <p className={style.conteudo}>{post.conteudo}</p>
            <button
              className={style['ler-mais']}
              onClick={() => abrirModal(post)}
            >
              ler mais
            </button>
          </section>
        </div>
      ))}
      {modalAberto && (
        <Modal post={postSelecionado} onClose={() => fecharModal()} />
      )}
    </>
  );
};

export default Artigos;
