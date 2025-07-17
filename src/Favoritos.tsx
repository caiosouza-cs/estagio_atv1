import React from 'react';
import { GlobalContext } from './components/GlobalContext';
import Modal from './components/Modal';
import Data from './components/Data';
import Like from './components/Like';
import type { Post } from './components/GlobalContext';
import style from './css/Cards.module.css';

const Favoritos = () => {
  const { likedPosts, posts } = React.useContext(GlobalContext);
  const [modalAberto, setModalAberto] = React.useState(false);
  const [postSelecionado, setPostSelecionado] = React.useState<Post | null>(
    null,
  );

  const favoritos = posts.filter((post) => likedPosts.includes(post.id));

  function abrirModal(post: Post) {
    setModalAberto(true);
    setPostSelecionado(post);
  }

  function fecharModal() {
    setModalAberto(false);
    setPostSelecionado(null);
  }

  return (
    <section className={style.cardsNavegacao}>
      {favoritos.map((post, id) => (
        <div className={`${style.cardPrincipal} ${style.animaCard}`} key={id}>
          <Data novaData={post.data} />
          <Like id={post.id} />
          <section>
            <h2 className={style.titulo}> {post.titulo} </h2>
            <p className={style.conteudo}> {post.conteudo} </p>
            <button className={style.lerMais} onClick={() => abrirModal(post)}>
              ler mais
            </button>
          </section>
        </div>
      ))}
      {modalAberto && postSelecionado && (
        <Modal post={postSelecionado} onClose={() => fecharModal()} />
      )}
    </section>
  );
};

export default Favoritos;
