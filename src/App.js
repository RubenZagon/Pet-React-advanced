import React, {Fragment} from 'react'
import {GlobalStyles} from './styles/GlobalStyles';
import {ListOfCategories} from "./components/Molecules/ListOfCategories";
import {ListOfPhotoCards} from "./components/Molecules/ListOfPhotoCards";
import {Logo} from "./components/Atoms/Logo";
import {PhotoCardWithQuery} from "./container/PhotoCardWithQuery";

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
          : <Fragment>
            <ListOfCategories/>
            <ListOfPhotoCards categoryId={1}/>
          </Fragment>
      }
    </div>
  )
};
