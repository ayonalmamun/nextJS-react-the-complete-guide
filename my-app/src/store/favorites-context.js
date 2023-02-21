import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: JSON.parse(localStorage.getItem("favorites"))
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
  totalFavorites: localStorage.getItem("totalFavorites")
    ? parseInt(localStorage.getItem("totalFavorites"))
    : 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState(
    FavoritesContext._currentValue.favorites
  );

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((prevUserFavorites) => {
      localStorage.setItem(
        "favorites",
        JSON.stringify(prevUserFavorites.concat(favoriteMeetup))
      );
      const currentTotalFavorites = parseInt(
        localStorage.getItem("totalFavorites")
      )
        ? parseInt(localStorage.getItem("totalFavorites")) + 1
        : 1;
      localStorage.setItem("totalFavorites", currentTotalFavorites);
      return prevUserFavorites.concat(favoriteMeetup);
    });
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevUserFavorites) => {
      localStorage.setItem(
        "favorites",
        JSON.stringify(
          prevUserFavorites.filter((meetup) => meetup.id !== meetupId)
        )
      );
      const currentTotalFavorites =
        parseInt(localStorage.getItem("totalFavorites")) - 1;
      localStorage.setItem("totalFavorites", currentTotalFavorites);
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
