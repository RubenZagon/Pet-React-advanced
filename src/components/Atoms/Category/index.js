import React from 'react'
import {ColorBorder, Image, Link} from "./styles";

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';


export const Category = ({cover = DEFAULT_IMAGE, path = '#', emoji = '?'}) => (
  <Link to={path}>
    <ColorBorder>
      <Image src={cover} alt={emoji}/>
    </ColorBorder>
    {emoji}
  </Link>
);
