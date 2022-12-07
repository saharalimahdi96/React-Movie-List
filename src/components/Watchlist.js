import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

function Watchlist() {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My WatchList</h1>
          <span className="count-pill">
            {watchlist.length} 
            {watchlist.length === 1 ? "movie" : "movies"}
          </span>
        </div>

        {watchlist.length >0  ? (  <div className="movie-grid">
          {watchlist.map((movie) => (
            <MovieCard movie={movie} type="watchlist" key={movie.id}/>
          ))}
        </div>) : (<div className="no-movies">no movies in your list, add some!</div>)}
      
      </div>
    </div>
  );
}

export default Watchlist;
