import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
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
    <Helmet>
        <meta name="title" content={"List des film"} data-react-helmet="true" />
        <meta name="description" content={"list de recent film"} data-react-helmet="true" />
        <meta property="og:title" content={"List des film"} data-react-helmet="true" />
        <meta property="og:description" content={"list de recents films"} data-react-helmet="true" />
        {/* <meta property="og:image" content={""} data-react-helmet="true" /> */ }
        <meta name="robots" content={"index"} />
        <meta name="keywords" content={"flix"} />
        <link rel="canonical" href={"https://myflix-massihadjloum-gmailcom.vercel.app/movies-list"} />
        {/* <link rel="preload" fetchpriority="high" href={metaData?.firstBlock?.img} as='image' />
        <link rel="preload" fetchpriority="high" href={logoDark} as='image' />
        <link rel="preload" fetchpriority="high" href={logowhite} as='image' /> */}
        {/* <title>{metaData?.titePage}</title> */}
      </Helmet>
      <Helmet>
        <title>Liste des films</title>
        <meta name="description" content="liste des films récents" />
        <meta property="og:title" content="Liste des films" />
        <meta property="og:description" content="liste des films récents" />
        <meta property="og:image" content="" />
        <meta name="robots" content="index" />
        <meta name="keywords" content="flix" />
        <link rel="canonical" href="https://myflix-massihadjloum-gmailcom.vercel.app/movies-list" />
      </Helmet>
      {/* <NavBar show={true} /> */}
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
