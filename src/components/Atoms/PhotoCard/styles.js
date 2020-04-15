import styled from "styled-components";
import {fadeIn} from "../../../styles/animation";


// noinspection JSUnresolvedFunction
export const Article = styled.article`
  min-height: 200px;
`;


// noinspection JSUnresolvedFunction
export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;


export const Img = styled.img`
  ${fadeIn()};
  box-shadow: 0 10px 14px rgba(0,0,0, .2);
  height: 100%;
  // Para que la imagen se adapte al espacio que tiene
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;



