import React, {Fragment, useState} from 'react';
import {Article, Button, Img, ImgWrapper} from "./styles";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";
import {useLazyLoad} from "../../../customHooks/useLazyLoad";

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {

  const {element, show} = useLazyLoad();
  const key = `like - ${id}`;
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key);
      return like;
    } catch (e) {
      return false;
    }
  });

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value);
      setLiked(value)
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt=""/>
            </ImgWrapper>
          </a>

          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size={'32px'}/> {likes} likes!
          </Button>
        </Fragment>
      }
    </Article>
  )
};
