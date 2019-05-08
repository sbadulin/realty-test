import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HeaderStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #84BF41;
  height: 3em;
  color: #fff;
  font-weight: 600;
`;

export const ButtonStyled = styled(Link)`
  position: absolute;
  left: 0;
  padding: 10px;
  line-height: 0;
  transform: rotate(180deg);

  &:active {
    opacity: 0.5;
    transition-duration: 200ms;
  }
`;