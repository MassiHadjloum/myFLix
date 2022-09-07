import React, { useState } from "react";
import "./modal.css";
import Overview from "./overview";

const Modal = (props) => {
  const { open, close, movie } = props;

  const cancelClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  if (!props.open) return null;
  return (
    <div className="overlay" onClick={close}>
      <div className="modal-container" onClick={(e) => cancelClose(e)}>
        <div className="modal-header">
          <i className="material-icons close" onClick={close}>
            close
          </i>
        </div>
        <div
          className="modal-body">
          <div
            className="modal-image"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
              backgroundPosition: "center center",
              backgroundSize: 'cover'
            }}
            /* src={movie.poster_path}
            alt={movie.original_title} */
          ></div>
          <div className="playbtn">
            Play <i className="material-icons btnn">slideshow</i>
          </div>
          <Overview movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
