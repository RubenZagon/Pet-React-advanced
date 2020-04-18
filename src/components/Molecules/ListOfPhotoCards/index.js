import React from 'react';
import {PhotoCard} from "../../Atoms/PhotoCard";
import {withPhotos} from "../../../hoc/withPhotos";

const ListOfPhotoCardsComponent = ({data: {photos = []}} = {}) => {
  return (
    <ul>
      {
        photos.map(photo => <PhotoCard key={photo.id} {...photo}/>)
      }
    </ul>
  )
};

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);
