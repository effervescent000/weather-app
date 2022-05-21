import { favoritesConstants } from "../constants/favorites.constants";

const baseState = [];

const favoritesReducer = (state = baseState, action) => {
  switch (action.type) {
    case favoritesConstants.ADD_FAVORITE:
      return [...state, action.favorite];
    case favoritesConstants.REMOVE_FAVORITE:
      return state.filter((loc) => loc.id !== action.favorite.id);
    default:
      return state;
  }
};

export default favoritesReducer;
