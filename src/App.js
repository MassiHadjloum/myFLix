import { useEffect } from "react";
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import Router from "./routes/index.js";
import store from "../src/redux/stor";
import "./App.css";

function App() {
  useEffect(() => {
      //prepareData()
      const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8";
      fetch(url).then(res => 
        res.json())
      .then(data => {
        return data.results.map((movie, idx) => {
          return { ...movie, like: false, inmylist: false };
        });
      }).then(data => console.log(data));
     
      const TagManager = require('react-gtm-module');
      const tagManagerArgs = {
        gtmId: 'G-5FDH11MZTH'
      }
      TagManager.initialize(tagManagerArgs)
  }, [])
  
  //return (<MyForm />);
  return (
    <HelmetProvider >
    <Provider store={store} >
      <Router />
    </Provider>
    </HelmetProvider>
     ); 
}

export default App;
