import React, {useContext} from 'react'
import {GlobalStyles} from './styles/GlobalStyles';
import {Redirect, Router} from "@reach/router";
import {Logo} from "./components/Atoms/Logo";
import {Home} from "./pages/Home";
import {Detail} from "./pages/Detail";
import {NavBar} from "./components/Atoms/NavBar";
import {Favs} from "./pages/Favs";
import {User} from "./pages/User";
import {NotRegisterUser} from "./pages/NotRegisterUser";
import {Context} from "./Context";
import {NotFound} from "./pages/NotFound";


export const App = () => {

  const {isAuth} = useContext(Context);

  return (
    <div>
      <GlobalStyles/>
      <Logo/>
      <Router>
        <NotFound default/>
        <Home path={'/'}/>
        <Home path={'/pet/:id'}/>
        <Detail path={'/detail/:detailId'}/>
        {!isAuth && <NotRegisterUser path={'/login'}/>}
        {!isAuth && <Redirect from={'/favs'} to={'/login'}/>}
        {!isAuth && <Redirect from={'/user'} to={'/login'}/>}
        {isAuth && <Redirect from={'/login'} to={'/'}/>}
        <Favs path={'/favs'}/>
        <User path={'/user'}/>
      </Router>
      <NavBar/>
    </div>
  )
};
