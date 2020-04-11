import React from 'react'
import {GlobalStyles} from './styles/GlobalStyles';
import {ListOfCategories} from "./components/Molecules/ListOfCategories";
import {ListOfPhotoCards} from "./components/Molecules/ListOfPhotoCards";
import {Logo} from "./components/Atoms/Logo";

export const App = () => (
  <div>
    <GlobalStyles/>
    <Logo/>
    <ListOfCategories/>
    <ListOfPhotoCards/>
  </div>
);
