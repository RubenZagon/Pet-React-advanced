import React, {Fragment} from 'react';
import {FavsWithQuery} from "../container/GetFavorites";
import {Layout} from "../components/Layout";

export const Favs = () => {
  return (
    <Fragment>
      <Layout title={'Tus favoritos'} subtitle={'Aquí puedes encontrar tus favoritos'}/>
      <h1>Favs</h1>
      <FavsWithQuery/>
    </Fragment>
  )
};
