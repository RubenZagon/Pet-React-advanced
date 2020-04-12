import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Article, Button, Img, ImgWrapper} from "./styles";
import {MdFavoriteBorder} from "react-icons/md";

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {
  const element = useRef(null);
  const [show, setShow] = useState(false)

  useEffect(function () {
    // Esto es para saber si ahora está en el view port el artículo Photo
    const observer = new window.IntersectionObserver(function (entries) {
      const {isIntersecting} = entries [0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(element.current)
  }, [element]);

  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt=""/>
            </ImgWrapper>
            <Button>
              <MdFavoriteBorder size={'32px'}/> {likes} likes!
            </Button>
          </a>
        </Fragment>
      }
    </Article>
  )
}
