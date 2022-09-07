import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchMovie } from "../../redux/actions/actions";

import "./navbar.css";

const NavBar = (props) => {
  const [searchedMovie, setSearchedMovie] = useState("");
  const mylist = useSelector((state) => state.reducerMovies.mylist);
  const [show, setShow] = useState(false);

  const searchValue = useSelector((state) => state.reducerMovies.searched);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 420) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    /* return () => {
        window.removeEventListener('scroll');
    } */
  }, []);

  const onSearch = (e) => {
    if (e.key === "Enter") {
      dispatch(searchMovie(searchedMovie));
    }
  };

  const search = (e) => {
    setSearchedMovie(e.target.value);
  };

  const navigateTo = (e) => {
    e.preventDefault();
    window.location = "/movies-list";
  };

  return (
    <div className={`fixed-bar ${show && "black-bar"} `}>
      <Link className="title-flix" to="/movies-list">
        <h1>MyFlix</h1>
      </Link>
      <Link className="mylist" to={"/mylist"}>
        <h5 className="mylist">My List</h5>
      </Link>
      {props.show ? (
        <div className="search-container">
          <input
            type="search"
            name="search"
            placeholder="Search for a movie"
            onChange={(e) => search(e)}
            onKeyDown={(e) => onSearch(e)}
          />
          <button
            className="search-btn"
            onClick={() => dispatch(searchMovie(searchedMovie))}
          >
            <i className="material-icons">search</i>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default NavBar;
