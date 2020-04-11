import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  // Ocultar el scroll pero mantener la funcionalidad
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.li`
  padding: 0 8px;
`;
