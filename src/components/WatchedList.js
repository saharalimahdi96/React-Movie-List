import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

function WatchedList() {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movie</h1>
          <span className="count-pill">
            {watched.length} 
            {watched.length === 1 ? "movie" : "movies"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} type="watchedlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">no movies in your list, add some!</h2>
        )}
      </div>
    </div>
  );
}

export default WatchedList;
