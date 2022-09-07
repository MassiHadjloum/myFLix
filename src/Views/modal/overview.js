import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { likeMovie, addToMyList, removeFromMyList } from "redux/actions/actions";
import "./overview.css";

const Overview = (props) => {
  const { movie } = props;
  const [like, setlike] = useState(false);
  const [addToList, setaddToList] = useState(movie.inmylist)

  console.log("overview ", movie.inmylist)
  const dispatch = useDispatch();

  const likeMv = () => {
    if (!movie.like) {
      setlike(true);
      movie.like = true;
      dispatch(likeMovie(movie.id, true));
    } else {
      movie.like = false;
      setlike(false);
      dispatch(likeMovie(movie.id, false));
    }
  };

  const addToListAction = () => {
    setaddToList(true);
    dispatch(addToMyList(movie));
  } 

  return (
    <div className="overview">
      <p className="movie-title">{movie.original_title}</p>
      <div className="details">
        <p className="release-date">{movie.release_date} </p>
        {!movie.adult && <p className="adult"> 18+ </p>}
        <p className="hd">HD</p>
        <p className="note">{movie.vote_average.toFixed(1)} </p>
        <p>{movie.original_language} </p>
      </div>
      <div className="progressbar">
        <div className="progress">
          <div
            className="progress-bar w-25 bg-danger"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="90"
          ></div>
        </div>
        <p className="duration">33 min sur 105</p>
      </div>
      <p className="overview-text">{movie.overview}</p>
      <div className="like-dislike">
        {!movie.inmylist ?
        <div className="ad-to-list" onClick={addToListAction}>
          <i className="material-icons">add</i>
          <p className="add-movie">Add To List</p>
        </div> :
        <div className="ad-to-list">
          <i className="material-icons">check</i>
          <p className="add-movie">Added</p>
        </div> }
        <div className="footer">
          <div className="vote_count">
            <i
              className="material-icons like"
              style={{ color: movie.like ? "blue" : "white" }}
              onClick={likeMv}
            >
              thumb_up
            </i>
            <p>{movie.vote_count}</p>
          </div>
          {/*  <div className="vote_count">
            <i
              className="material-icons like"
              style={{ color: dislike ? "white" : "blue" }}
              onClick={dislikeMovie}
            >
              thumb_down
            </i>
            <p>{movie.vote_count}</p>
          </div> */}
        </div>
      </div>

      {/*   <video controls width={250}>
          <source src="/media/cc0-videos/flower.webm" type="video/webm"></source>
          <source src="/media/cc0-videos/flower.mp4"
            type="video/mp4"></source>
          Sorry, your browser doesn't support embedded videos.
    
      </video> */}
    </div>
  );
};

export default Overview;
