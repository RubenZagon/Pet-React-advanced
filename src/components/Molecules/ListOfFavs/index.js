import React, {Fragment} from 'react';
import {Grid, Image, Link} from "./styles";

export const ListOfFavs = ({favs = []}) => {
  const hasFavs = favs && Boolean(favs.length);
  const title = favs && favs.length ? `Tienes ${favs.length} favoritos` : 'No tienes favoritos';


  return (
    <Fragment>
      <p>{title}</p>
      <Grid>
        {hasFavs && favs.map(fav =>
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            <Image key={fav.id} src={fav.src}/>
          </Link>)
        }
      </Grid>
    </Fragment>
  )
};
