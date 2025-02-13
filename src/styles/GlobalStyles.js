import { createGlobalStyle } from "styled-components";
import { fontRegular } from "./mixins";
import { breakPoints } from "./breakpoints";

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

  ${breakPoints.laptopScreen}{

    .navList{
      align-items: flex-end;
      /* width: 100%; */

       .navLink {

        .icon{
          font-size: 4rem;
          /* width: 100%; */
        }
        
         span{
          display: none;
        }
       }
    }

    .sideBar{
    
      width: 10rem;
      

      /* &:hover{
        position: absolute;
        width: auto;

        .navList{
          align-items: flex-start;
        }

        .navLink{
          span{
            display: block;
          }
        }
      } */

    }
  }

  /* @keyframes slideIn {
      0% {
        width: 10%;
      }
      100% {
        width: auto;
      }
    } */
`;

export default GlobalStyles;
