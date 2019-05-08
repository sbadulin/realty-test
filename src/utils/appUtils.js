import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import-normalize;

  body {
    margin: 0;
    font-family: sans-serif;
  }

  a {
    text-decoration: none;
  }
`
