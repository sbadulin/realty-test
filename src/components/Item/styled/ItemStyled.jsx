import styled from 'styled-components';

export const ItemStyled = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:active {
    background-color: #ccc;
    transition-duration: 100ms;
    color: initial;
  }

  &:hover {
    background-color: #eee;
    transition-duration: 100ms;
    color: initial;
  }
`;

export const ItemThumbStyled = styled.img`
  max-width: 5.6rem;
  max-height: 5.6rem;
  margin-right: 10px;
`;

export const ItemTextWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  align-self: stretch;
  border-bottom: 1px solid #c8c7cc;
  font-family: sans-serif;
`;

export const ItemTextHeadingStyled = styled.div`
    margin: 0 0 2px;
    font-size: 1rem;
    font-weight: normal;
`;

export const ItemTextInfoStyled = styled.div`
    margin: 0 0 2px;
    font-size: 0.8rem;
    line-height: normal;
    color: #666;
`;