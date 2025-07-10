import React from 'react';
import { GlobalContext } from './componentes/GlobalContext';
import Modal from './componentes/Modal';
import Data from './componentes/Data';
import Like from './componentes/Like';

const Favoritos = () => {
  const { likedPosts, posts } = React.useContext(GlobalContext);
  const [modalAberto, setModalAberto] = React.useState(false);
  const [postSelecionado, setPostSelecionado] = React.useState(null);

  const favoritos = posts.filter((post) => likedPosts.includes(post.id));

  function abrirModal(post) {
    setModalAberto(true);
    setPostSelecionado(post);
  }

  function fecharModal() {
    setModalAberto(false);
    setPostSelecionado(null);
  }

  return (
    <section className="navegacao" id="cards-navegacao">
      {favoritos.map((post, id) => (
        <div className="card-principal animaCard" key={id}>
          <Data novaData={post.data} />
          <Like id={post.id} />
          <section>
            <h2 className="titulo">{post.titulo}</h2>
            <p className="conteudo">{post.conteudo}</p>
            <button className="ler-mais" onClick={() => abrirModal(post)}>
              ler mais
            </button>
          </section>
        </div>
      ))}
      {modalAberto && (
        <Modal post={postSelecionado} onClose={() => fecharModal()} />
      )}
    </section>
  );
};

export default Favoritos;
