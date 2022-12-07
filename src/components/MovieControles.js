import React, { useContext } from "react";
import AppReducer from "../context/AppReducer";
import { GlobalContext } from "../context/GlobalState";

function MovieControles({ movie, type }) {
  const {
    addMovieToWatchedlist,
    removeMovieFromWatchList,
    moveToWatchList,
    removeFromWatched,
  } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => addMovieToWatchedlist(movie)}
          >
            <i className="fa-fw far fa-eye"></i>
          </button>
          <button
            onClick={() => removeMovieFromWatchList(movie.id)}
            className="ctrl-btn"
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
      {type === "watchedlist" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchList(movie)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
}

export default MovieControles;
