import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../navbar";
import "./style.css";

const MyListMovies = () => {
  const datalist = useSelector((state) => state.reducerMovies.mylist);

  const cards = datalist.map((item, idx) => (
    <div className="grid-item" key={item.id + item.vote_average + idx}>
      <div className="star">
        <i className="material-icons">grade</i>
        <div className="vote">{item.vote_average.toFixed(1)}</div>
      </div>
      <img
        className="image"
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        alt={item.original_title}
        /* src={`https://image.tmdb.org/t/p/${item.poster_path}`} */
      />
      <i className="material-icons play">slideshow</i>
      <div className="item-title">
        <p className="title">{item.original_title}</p>
      </div>
    </div>
  ));

  const displayIfEmpty = () => {
    if (datalist.length === 0) {
      return (
        <div className="container">
          <Link to="/movies-list"><p className="nothing">
            List Is Empty, Start Add Some Movies Now ...
          </p>
          </Link>
        </div>
      );
    } else {
      return <div className="grille">{cards} </div>;
    }
  };

  return (
    <>
      <div className="header">
        <NavBar show={false} />
      </div>

      <div className="mycontainer" /* style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500//vvObT0eIWGlArLQx3K5wZ0uT812.jpg)` }} */>
        <div className="gridd">{displayIfEmpty()}</div>
      </div>
    </>
  );
};

export default MyListMovies;
