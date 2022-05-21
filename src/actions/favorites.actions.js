import { favoritesConstants } from "../constants/favorites.constants";

export const addFavorite = (favorite) => ({
  type: favoritesConstants.ADD_FAVORITE,
  favorite,
});

export const removeFavorite = (favorite) => ({
  type: favoritesConstants.REMOVE_FAVORITE,
  favorite,
});
