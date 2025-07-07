import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../componentes/GlobalContext';

export const useLike = ({ id }) => {
  const { likedPosts, updateLikedPosts } = useContext(GlobalContext);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    console.log('running usememo', id, likedPosts);
    setIsLiked(!!likedPosts?.find((item) => item === id));
  }, [id, likedPosts]);

  const handleLike = () => {
    console.log('running handleLike', id, isLiked);

    const newLikedPosts = isLiked
      ? likedPosts.filter((item) => item !== id)
      : [...likedPosts, id];

    updateLikedPosts(newLikedPosts);
  };

  return {
    isLiked,
    handleLike,
  };
};
