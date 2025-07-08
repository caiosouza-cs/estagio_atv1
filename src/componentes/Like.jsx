import { useLike } from '../hooks/useLike';
import Heart from '../icons/Heart';
import HeartFilled from '../icons/HeartFilled';
import style from '../styles/Modal.module.css';

const Like = (id) => {
  const { isLiked, handleLike } = useLike(id);

  return (
    <button className={style.like} onClick={handleLike}>
      {isLiked ? <HeartFilled /> : <Heart />}
    </button>
  );
};

export default Like;
