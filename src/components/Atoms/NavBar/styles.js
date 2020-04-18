import styled from "styled-components";
import {Link as LinkRouter} from "@reach/router";
import {fadeIn} from "../../../styles/animation";

export const Nav = styled.nav`
  align-items: center;
  background:#fcfcfc;
  border-top: 1px solid black;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  height: 50px;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  width: 100%;
  z-index: 5;
`;

export const Link = styled(LinkRouter)`
  color: #888;
  height: 100%;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  
  &[aria-current] {
    color: black;
    
    &:after {
      ${fadeIn({time: '0.5s'})};
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
    }
  }
`;
