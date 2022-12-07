import React, { useReduser, useEffect, createContext, useReducer } from "react";
import AppReduser from "./AppReducer";

// initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReduser, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);
  // acttion
  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchList = (movie) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: movie });
  };
  const addMovieToWatchedlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };


  // move to watch list

  const moveToWatchList = (movie) =>{
    dispatch ({type : "MOVE_TO_WATCHLIST" , payload:movie})

  }
   // remove from watched 


   const removeFromWatched = (id) =>{
    dispatch ({type : "REMOVE_FROM_WATCHED" , payload:id})

   }
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchList,
        removeMovieFromWatchList,
        addMovieToWatchedlist,
        moveToWatchList,
        removeFromWatched
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
