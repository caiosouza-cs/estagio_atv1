import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('./posts.json');
      const json = await response.json();
      setPosts(json);
    }

    fetchPosts();
  }, []);

  return (
    <GlobalContext.Provider value={{ posts, setPosts }}>
      {children}
    </GlobalContext.Provider>
  );
};
