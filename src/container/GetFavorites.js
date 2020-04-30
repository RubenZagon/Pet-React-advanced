import React from 'react';
import {Query} from "react-apollo";
import {gql} from 'apollo-boost';
import {ListOfFavs} from "../components/Molecules/ListOfFavs";

const GET_FAVS = gql`
query getFavs {
  favs{
    id
    categoryId
    src
    likes
    userId
  }
}`;

const renderProp = ({loading, error, data}) => {
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error!</p>
  }
  const {favs} = data;

  return <ListOfFavs favs={favs}/>;
};

export const FavsWithQuery = () => (
  // fetchPolicy=‘cache-and-network’ va a la red y obtiene una version fresca q almacena en el cache.
  // Este es mejor por si hay acceso offline a la app.
  <Query query={GET_FAVS} fetchPolicy={'cache-and-network'}>
    {renderProp}
  </Query>
);
