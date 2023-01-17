import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchMovie } from 'redux/actions/actions';

const NavBar = ({shownav}) => {

  const [searchedMovie, setSearchedMovie] = useState("");
  const [show, setShow] = useState(false);
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

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/movies-list">MyFlix</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/mylist">My list</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/blog"}>Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to={"faq"}>Faq</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to={"contact"}>Contact us</Link>
            </li>
          </ul>
          {shownav ? (
            <div className="d-flex">
              <input className="form-control me-2" type="search"
                placeholder="Search for a movie" aria-label="Search"
                onChange={(e) => search(e)}
                onKeyDown={(e) => onSearch(e)}
              />
              <button className="btn btn-outline-success" type="submit"
                onClick={() => dispatch(searchMovie(searchedMovie))}
              >Search</button>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  )
}

export default NavBar