import React from 'react';
import {PhotoCard} from "../components/Atoms/PhotoCard";

import {gql} from 'apollo-boost'
import {Query} from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`;

const renderProp = ({loading, error, data}) => {
  // TODO: Cambiar el loading a un spinner cargando
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Ha ocurrido un error 😵 </p>

  const {photo = {}} = data;
  return <PhotoCard {...photo} />
};

export const PhotoCardWithQuery = ({id}) => (
  <Query query={GET_SINGLE_PHOTO} variables={{id}}>
    {renderProp}
  </Query>
);
