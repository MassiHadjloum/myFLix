import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.css";

const Grid = (props) => {
  const movies = useSelector((state) => state.reducerMovies.movies);
  //const [movies, setMovies] = useState(data);
  const searching = useSelector((state) => state.reducerMovies.searched);

  useEffect(() => {
      //setMovies(useSelector((state) => state.reducerMovies.movies));
    console.log(searching, " ",movies[0].like)
    }, [searching])


  const cards = movies.map((item, idx) => (
    <div
      className="grid-item"
      key={item.id + item.vote_average + idx}
      onClick={() => props.open(item)}
    >
      <div className="star">
        <i className="material-icons">grade</i>
        <div className="vote">{item.vote_average.toFixed(1)}</div>
      </div>
      <img
        className="image"
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        alt={item.original_title}
        width={300}
        height={400}
        /* src={`https://image.tmdb.org/t/p/${item.poster_path}`} */
      />
      <i className="material-icons play">slideshow</i>
      <div className="item-title">
        <p className="title">{item.original_title}</p>
      </div>
    </div>
  ));

  return (
    <div className="grid">
      <div className="grille">{cards}</div>
    </div>
  );
};

export default Grid;
