import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Youtube from "react-youtube";
import "./video.css";

const Video = (props) => {
  const [movie, setmovie] = useState({});
  const url = `https://api.themoviedb.org/3/movie/
  ${props.id}
  ?api_key=1cf50e6248dc270629e802686245c2c8&append_to_response=videos`;

  const fetchForMovie = async () => {
    const { data } = await axios.get(url);
    /* await fetch(url).then(res => 
        res.json())
        .then((data) => {
            return data
        }); */
    return data;
  };

  useEffect(() => {
    setTimeout(() => {}, 300);

    const data = fetchForMovie();
    data.then((d) => setmovie(d));
    console.log(movie);
    //const data = fetchForMovie();
  }, []);

  return (
    <div className="container">
     {/*  <Vido data={movie} /> */}
    </div>
  );
};

export default Video;

const Vido = (props) => {
  console.log(props);
  const trailer = props.data.videos.results.find(
    (vd) => vd.name === "Official Trailer"
  );

  /* const trailer = () => {
    return props.data.videos.results.find(
      (video) => video.name === "Official Trailer"
    );
  }; */

  //console.log("trailer ", trailer());

  return (
    <div className="youtube">
      <p>hello</p>
      {/* <Youtube id={trailer.key} /> */}
    </div>
  );
};

/* import React, { Component } from "react";
import axios from "axios";

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      loading: false,
    };
  }

  componentDidMount() {
    const url = `https://api.themoviedb.org/3/movie/${this.props.id}?api_key=1cf50e6248dc270629e802686245c2c8`;


   axios.get(url).then(res => {
       this.setState({movie: res.data, loading: true});
       
    })
    console.log(this.state.movie);
      
    
  }

  render() {
    return (
        <div className="container">
        {this.state.loading ? 
        <video autoPlay muted controls preload="auto">
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          <source src="movie.webm" type="video/webm" />
          <source src="movie.ogg" type="video/ogg" />
        </video>
        : null}
      </div>
    );
  }
}
 */
