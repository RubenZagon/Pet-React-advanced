import React, {Fragment} from 'react';
import {Article, Img, ImgWrapper} from "./styles";
import {useLazyLoad} from "../../../hooks/useLazyLoad";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {FavButton} from "../FavButton";

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';


export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {
  const {element, show} = useLazyLoad();
  const key = `like - ${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);


  const handleFavClick = () => setLiked(!liked);

  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} alt=""/>
            </ImgWrapper>
          </a>

          <FavButton liked={liked}
                     likes={likes}
                     onClick={handleFavClick}
          />
        </Fragment>
      }
    </Article>
  )
};
