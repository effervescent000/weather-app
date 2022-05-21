import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";

import { favoritesConstants } from "../../constants/favorites.constants";

const FavoriteIcon = ({ location }) => {
  const favoriteLocations = useSelector((state) => state.favorites);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (favoriteLocations) {
      setIsFavorite(favoriteLocations.includes(location));
    }
  }, [favoriteLocations]);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: favoritesConstants.REMOVE_FAVORITE, favorite: location });
    } else {
      dispatch({ type: favoritesConstants.ADD_FAVORITE, favorite: location });
    }
  };

  return <FontAwesomeIcon icon={isFavorite ? fullStar : emptyStar} onClick={toggleFavorite} />;
};

export default FavoriteIcon;
