import FetchingScreen from 'components/fetching-screen';
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Blog from 'Views/Blog/blog';
import Contact from 'Views/Contactus/contact';
import FAQ from 'Views/FAQ/faq';
import MyListMovies from 'Views/Movies/mylistmovies/my-list-movies';
import Video from 'Views/Movies/video';
import Homepage from "../Views/Homepage"
import Login from "../Views/Login"
import Movies from '../Views/Movies'
import Vitrine from './vitrine';

const Router = () => {
  const SuspenseComponent = ({ children }) =>
    <Suspense fallback={<div style={{ minHeight: '85vh' }}><FetchingScreen isFetching={true} /></div>}>
      {children}
    </Suspense>
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SuspenseComponent> <Vitrine />  </SuspenseComponent>}>
          <Route path="/" element={<SuspenseComponent> <Login />  </SuspenseComponent>} />
          {/* <Route path="login" element={<SuspenseComponent> <Login />  </SuspenseComponent>} /> */}
          <Route path="movies-list" element={<SuspenseComponent> <Movies />  </SuspenseComponent>} />
          <Route path="mylist" element={<SuspenseComponent> <MyListMovies />  </SuspenseComponent>} />
          <Route path="faq" element={<SuspenseComponent> <FAQ />  </SuspenseComponent>} />
          <Route path="blog" element={<SuspenseComponent> <Blog />  </SuspenseComponent>} />
          <Route path="contact" element={<SuspenseComponent> <Contact />  </SuspenseComponent>} />
          <Route path="video/:id" element={<SuspenseComponent> <Video />  </SuspenseComponent>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default Router;
