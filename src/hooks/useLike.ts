import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '.././components/GlobalContext';

type id = {
  id: number;
};

export const useLike = ({ id }: id) => {
  const { likedPosts, updateLikedPosts } = useContext(GlobalContext);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(!!likedPosts?.find((item) => item === id));
  }, [id, likedPosts]);

  const handleLike = () => {
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
