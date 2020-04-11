import React from 'react'
import {GlobalStyles} from './GlobalStyles';
import {ListOfCategories} from "./components/Molecules/ListOfCategories";
import {ListOfPhotoCards} from "./components/Molecules/ListOfPhotoCards";

export const App = () => (
  <div>
    <GlobalStyles/>
    <ListOfCategories/>
    <ListOfPhotoCards/>
  </div>
);
