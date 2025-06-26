'use client'

import {useState, useEffect, useContext, createContext} from 'react'

const AppContext = createContext()

export const AppContextProvider = ({children}) => {
  const [favorites, setFavorites]= useState([])
     
  const handleAddToFavorites = ({ title, poster_path, id }) => {
    const exists = favorites.some(movie => movie.id === id);
    if (!exists) {
      setFavorites([...favorites, { title, poster_path, id }]);
    }
  };
  
  const handleRemoveFromFavorites = (movieId) => {
    setFavorites(favorites.filter(movie => movie.id !== movieId));
  };
  
  const favoritesQty = () => favorites.length
      
  //mi logica y fces
  return (
    <AppContext.Provider
    value={{
      favorites, //fces q quiero dejar dispo
      handleAddToFavorites,
      handleRemoveFromFavorites,
      favoritesQty
    }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
} //hook

export default AppContext;