import React, { useState } from "react";
import "./style.css";

import Model from "../modal/modal";
import Header from "./header";
import Grid from "./grid";
import NavBar from "./navbar";

const MoviesList = () => {
  // https://image.tmdb.org/t/p/w500//1Ilv6ryHUv6rt9zIsbSEJUmmbEi.jpg

  const [openModal, setOpenModal] = useState(false);
  const [movie, setMovie] = useState({});

  const openModalHandler = (movie) => {
    setMovie(movie);
    setOpenModal(true);
  };

  const closeModalHandler = (e) => {
    e.stopPropagation();
    setOpenModal(false);
  };

  return (
    <>
      <NavBar show={true} />
      <Header />
      <Model
        movie={movie}
        open={openModal}
        close={(e) => closeModalHandler(e)}
      />
      <Grid open={openModalHandler} />
    </>
  );
};

export default MoviesList;
