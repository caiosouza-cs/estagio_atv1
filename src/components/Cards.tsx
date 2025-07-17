import React from 'react';
import Data from './Data';
import Modal from './Modal';
import { GlobalContext } from './GlobalContext';
import Like from './Like';
import type { Post } from './GlobalContext';
import style from '../css/Cards.module.css';

const Cards = () => {
  const { posts } = React.useContext(GlobalContext);
  const [modalAberto, setModalAberto] = React.useState(false);
  const [postSelecionado, setPostSelecionado] = React.useState<Post | null>(
    null,
  );

  function abrirModal(post: Post) {
    setModalAberto(true);
    setPostSelecionado(post);
    console.log(post);
  }

  function fecharModal() {
    setModalAberto(false);
    setPostSelecionado(null);
  }

  return (
    <>
      {posts.map((post, id) => (
        <div
          className={`${style.cardPrincipal} ${style.animaCard}`}
          key={id}
          id="cardPrincipal"
        >
          <Data novaData={post.data} />
          <Like id={post.id} />
          <section>
            <h2 className={style.titulo}>{post.titulo}</h2>
            <p className={style.conteudo}>{post.conteudo}</p>
            <button className={style.lerMais} onClick={() => abrirModal(post)}>
              ler mais
            </button>
          </section>
        </div>
      ))}
      {modalAberto && postSelecionado && (
        <Modal post={postSelecionado} onClose={() => fecharModal()} />
      )}
    </>
  );
};

export default Cards;
