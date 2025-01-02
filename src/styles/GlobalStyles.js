import { createGlobalStyle } from "styled-components";
import { fontRegular } from "./mixins";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #3DACDB;
    --light-primary: #72B7D4;
    --grey-background: #F9FAFB;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    transition: background-color 0.3s, border 0.3s;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-family: 'Roboto Condensed', serif;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  h1{
    ${fontRegular}
  }
`;


export default GlobalStyles;