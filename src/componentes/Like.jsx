import { useLike } from '../hooks/useLike';
import Heart from '../icons/Heart';
import HeartFilled from '../icons/HeartFilled';

const Like = (id) => {
  const { isLiked, handleLike } = useLike(id);

  return (
    <button className="like" onClick={handleLike}>
      {isLiked ? <HeartFilled /> : <Heart />}
    </button>
  );
};

export default Like;
