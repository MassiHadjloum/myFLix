import React, { useEffect, useState } from "react";
import data from "Views/list-de-films";
import { useSelector, useDispatch, useStore } from "react-redux";
import {
  addToMyList,
  removeFromMyList,
  initActionMovieForHeader,
} from "redux/actions/actions";
import "./header.css";
import { Link, NavigationType } from "react-router-dom";
import Video from "./video";

const Header = ({ navigation }) => {
  const movie = useSelector((state) => state.reducerMovies.header_movie);
  const mylist = useSelector((state) => state.reducerMovies.mylist);
  const dispatch = useDispatch();
  const [inmylist, setInmylist] = useState(movie.inmylist);
  const [video, setvideo] = useState(false);

  const addMovieToMyList = () => {
    movie.inmylist = true;
    setInmylist(true);
    dispatch(addToMyList(movie));
    console.log(movie.inmylist);
  };

  const removeMovieFromMyList = () => {
    movie.inmylist = false;
    setInmylist(false);
    dispatch(removeFromMyList(movie));
  };

  const playTrailer = () => {
    setvideo(true);
  };

  return (
    <div
      className="header-movies"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      {video ? <Video id={movie.id} /> : null}
      <div className="body">
        <h1 className="header-title">{movie.original_title}</h1>
        <div className="actions">
          <div className="lec" onClick={playTrailer}>
            <i className="material-icons icon">play_arrow</i>
            <p>Lecture</p>
          </div>
          {!movie.inmylist ? (
            <div className="lec" onClick={addMovieToMyList}>
              <i className="material-icons icon">add</i>
              <p>My list</p>
            </div>
          ) : (
            <div className="lec" onClick={removeMovieFromMyList}>
              <i className="material-icons icon">remove</i>
              <p>My list</p>
            </div>
          )}
        </div>
        <p className="header-overview">{movie.overview} </p>
      </div>
    </div>
  );
};

export default Header;
