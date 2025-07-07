import React, { useEffect, useMemo, useState } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [posts, setPosts] = React.useState([]);
  const likedPostsStorage = window.localStorage.getItem('likedPostsStorage');
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    if (!likedPostsStorage) return;
    setLikedPosts(JSON.parse(likedPostsStorage));
  }, [likedPostsStorage]);

  const updateLikedPosts = (newList) => {
    window.localStorage.setItem('likedPostsStorage', JSON.stringify(newList));

    setLikedPosts(newList);
  };

  React.useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('./posts.json');
      const json = await response.json();
      setPosts(json);
    }

    fetchPosts();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ posts, setPosts, likedPosts, updateLikedPosts }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
