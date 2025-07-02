import React from 'react';
import Data from './Data';
import Modal from './Modal';
import { GlobalContext } from './GlobalContext';

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
          className="card-principal"
          key={indice}
          onClick={() => abrirModal(post)}
        >
          <Data novaData={post.data} />
          <section>
            <h2 className="titulo">{post.titulo}</h2>
            <p className="conteudo">{post.conteudo}</p>
            <button className="ler-mais" onClick={() => abrirModal(post)}>
              ⏷
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
