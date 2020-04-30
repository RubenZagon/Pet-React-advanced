import React, {Fragment} from 'react'
import {ListOfCategories} from "../components/Molecules/ListOfCategories";
import {ListOfPhotoCards} from "../components/Molecules/ListOfPhotoCards";
import {Layout} from "../components/Layout";

const HomePage = ({id}) => {
  return (
    <Fragment>
      <Layout title={'Tu app de fotos de mascotas'}
              subtitle={'Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'}/>
      <ListOfCategories/>
      <ListOfPhotoCards categoryId={id}/>
    </Fragment>
  )
};

export const Home = React.memo(HomePage, (prevProps, propsCurrent) => {
  /*
  Con esto le estamos diciendo que tendrá que recordar la página, evitando que la recargue
  si las props no han cambiado
   */
  return prevProps.id === propsCurrent.id
});
