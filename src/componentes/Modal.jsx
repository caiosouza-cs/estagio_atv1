import Data from './Data';
import Like from './Like';

import style from '../styles/Modal.module.css';

const Modal = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className={style.overlay} onClick={onClose}>
      <div
        className={`${style.modal} animaModal`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style['modal-header']}>
          <Data novaData={post.data} />
          <Like id={post.id} />
          <button className={style['modal-fechar']} onClick={onClose}>
            x
          </button>
        </div>

        <h2 className={style.titulo}>{post.titulo}</h2>

        <div className={style['modal-body']}>
          <img
            className={style['imagem-capa']}
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
