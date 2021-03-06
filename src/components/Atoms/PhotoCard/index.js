import React, {Fragment} from 'react';
import {Article, Img, ImgWrapper} from "./styles";
import {useLazyLoad} from "../../../hooks/useLazyLoad";
import {FavButton} from "../FavButton";
import {ToggleLikeMutation} from "../../../container/ToggleLikeMutation";
import {Link} from "@reach/router";

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';


export const PhotoCard = ({id, liked, likes = 0, src = DEFAULT_IMAGE}) => {
  const {element, show} = useLazyLoad();

  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt=""/>
            </ImgWrapper>
          </Link>

          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({
                    variables: {
                      input: {id}
                    }
                  })
                }

                return <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
              }
            }
          </ToggleLikeMutation>
        </Fragment>
      }
    </Article>
  )
};
