import React, {Fragment} from 'react'
import {ListOfCategories} from "../components/Molecules/ListOfCategories";
import {ListOfPhotoCards} from "../components/Molecules/ListOfPhotoCards";

export const Home = ({id}) => {
  return (
    <Fragment>
      <ListOfCategories/>
      <ListOfPhotoCards categoryId={id}/>
    </Fragment>
  )
};
