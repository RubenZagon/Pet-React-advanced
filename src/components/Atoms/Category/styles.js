import styled from "styled-components";
import {Link as LinkRouter} from "@reach/router";

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;

export const Image = styled.img`
  border: 3px solid #ddd;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`;

export const ColorBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: rgb(252,204,99);
  background: linear-gradient(48deg, 
  rgba(252,204,99,1) 0%, 
  rgba(251,173,80,1) 20%, 
  rgba(188,42,141,1) 80%, 
  rgba(138,58,185,1) 100%); 
  
  border-radius: 50%;
  overflow: hidden;
  height: 83px;
  width: 83px;
`;



