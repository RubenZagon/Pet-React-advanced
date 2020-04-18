import React from 'react'
import {GlobalStyles} from './styles/GlobalStyles';
import {Router} from "@reach/router";
import {Logo} from "./components/Atoms/Logo";
import {PhotoCardWithQuery} from "./container/PhotoCardWithQuery";
import {Home} from "./pages/Home";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <div>
      <GlobalStyles/>
      <Logo/>
      {
        detailId
          ? <PhotoCardWithQuery id={detailId}/>
          : <Router>
            <Home path={'/'}/>
            <Home path={'/pet/:id'}/>
          </Router>
      }
    </div>
  )
};
