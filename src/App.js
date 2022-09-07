import { useEffect } from "react";
import "./App.css";
import Router from "./routes/index.js";
import MyForm from "form";
import { Provider } from 'react-redux';
import store from "../src/redux/stor";
import { prepareData } from "Views/list-de-films";



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
    
  }, [])
  
  //return (<MyForm />);
  return (
    <Provider store={store} >
      <Router />
    </Provider>
     ); 
}

export default App;
