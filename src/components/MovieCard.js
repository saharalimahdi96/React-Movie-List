import React , {useContext} from "react";
import GlobalContext from '../context/GlobalState';
import MovieControles from "./MovieControles";

function MovieCard({ movie, type }) {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
      ) : (
        <div className="filler-poster"></div>
      )}
      <MovieControles type={type} movie={movie} />
    </div>
  );
}

export default MovieCard;
