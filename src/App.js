import React from 'react'
import {GlobalStyles} from './styles/GlobalStyles';
import {Router} from "@reach/router";
import {Logo} from "./components/Atoms/Logo";
import {Home} from "./pages/Home";
import {Detail} from "./pages/Detail";
import {NavBar} from "./components/Atoms/NavBar";
import {Favs} from "./pages/Favs";
import {User} from "./pages/User";
import {NotRegisterUser} from "./pages/NotRegisterUser";
import Context from "./Context";


export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  console.log(detailId);
  return (
    <div>
      <GlobalStyles/>
      <Logo/>
      <Router>
        <Home path={'/'}/>
        <Home path={'/pet/:id'}/>
        <Detail path={'/detail/:detailId'}/>
      </Router>

      <Context.Consumer>
        {
          ({isAuth}) => isAuth
            ? <Router>
              <Favs path={'/favs'}/>
              <User path={'/user'}/>
            </Router>
            : <Router>
              <NotRegisterUser path={'/favs'}/>
              <NotRegisterUser path={'/user'}/>
            </Router>
        }
      </Context.Consumer>

      <NavBar/>
    </div>
  )
};
