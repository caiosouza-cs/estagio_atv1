import React, { useEffect, useState } from 'react';

export type Post = {
  id: number;
  data: string;
  titulo: string;
  conteudo: string;
  imagem_capa: string;
};

type GlobalContextType = {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  likedPosts: number[];
  updateLikedPosts: (newList: number[]) => void;
};

type GlobalStorageProps = {
  children: React.ReactNode;
};

export const GlobalContext = React.createContext<GlobalContextType>({
  posts: [],
  setPosts: () => {},
  likedPosts: [],
  updateLikedPosts: () => {},
});

export const GlobalStorage = ({ children }: GlobalStorageProps) => {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const likedPostsStorage = window.localStorage.getItem('likedPostsStorage');
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  useEffect(() => {
    if (!likedPostsStorage) return;
    setLikedPosts(JSON.parse(likedPostsStorage));
  }, [likedPostsStorage]);

  const updateLikedPosts = (newList: number[]) => {
    window.localStorage.setItem('likedPostsStorage', JSON.stringify(newList));
    setLikedPosts(newList);
  };

  React.useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('./posts.json');
      const json: Post[] = await response.json();
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
