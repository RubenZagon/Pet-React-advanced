import React, {Fragment} from 'react'
import {ListOfCategories} from "../components/Molecules/ListOfCategories";
import {ListOfPhotoCards} from "../components/Molecules/ListOfPhotoCards";
import {Layout} from "../components/Layout";

export const Home = ({id}) => {
  return (
    <Fragment>
      <Layout title={'Tu app de fotos de mascotas'}
              subtitle={'Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'}/>
      <ListOfCategories/>
      <ListOfPhotoCards categoryId={id}/>
    </Fragment>
  )
};
