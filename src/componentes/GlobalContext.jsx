import React, { useEffect, useState } from 'react';
import supabase from '../utils/supabase';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [posts, setPosts] = React.useState([]);
  const likedPostsStorage = window.localStorage.getItem('likedPostsStorage');
  const [likedPosts, setLikedPosts] = useState([]);
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session))

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

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
      value={{ posts, setPosts, likedPosts, updateLikedPosts, session }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
