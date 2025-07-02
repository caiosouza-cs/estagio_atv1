import React from 'react';
import Data from './Data';
import { GlobalContext } from './GlobalContext';

const Modal = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <Data novaData={post.data} />
          <button className="like">♡</button>
          <button className="modal-fechar" onClick={onClose}>
            ⏶
          </button>
        </div>

        <h2 className="titulo">{post.titulo}</h2>

        <div className="modal-body">
          <img
            className="imagem-capa"
            src={post.imagem_capa}
            alt="Imagem de capa"
          />
          <p className="conteudo-modal">{post.conteudo}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
