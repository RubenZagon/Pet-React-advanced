import React from 'react'
import {GlobalStyles} from './styles/GlobalStyles';
import {ListOfCategories} from "./components/Molecules/ListOfCategories";
import {ListOfPhotoCards} from "./components/Molecules/ListOfPhotoCards";
import {Logo} from "./components/Atoms/Logo";

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
          ? <h1>Estamos usando detail ID</h1>
          : <>
            <ListOfCategories/>
            <ListOfPhotoCards categoryId={1}/>
          </>
      }
    </div>
  )
};
