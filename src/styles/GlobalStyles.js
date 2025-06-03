import { createGlobalStyle, keyframes } from "styled-components";
import { fontRegular } from "./mixins";
import { breakPoints } from "./breakpoints";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #3DACDB;
    --light-primary: #72B7D4;
    --dark-primary: #4E8AA4;
    --grey-background: #F9FAFB;
    --danger: #d91656

    /* Status Codes */
    /* --active: #D1F8EF; */
  }

  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    /* color: #72c6D1; */

    transition: background-color 0.3s, border 0.3s;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-family: 'Roboto Flex', serif;
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

  button{
    transition: all .1s ease-in;
  }

  .available{
    background-color: var(--active);
  }

  ${breakPoints.laptopScreen}{

    .navList{
      /* align-items: flex-end; */
      /* width: 100%; */
      justify-content: center;

       .navLink {
          flex-direction: column;
          
          /* align-items: center; */
          /* margin: 0 auto; */
        .icon{
          font-size: 4rem;
          /* width: 100%; */
        }
        
         span{
          /* display: none; */
        }
       }
    }

    .sideBar{
    
      width: 15rem;
      

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

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

  100%{
    opacity: 1;
    transform: scale(1, 1);
  }
`;

export default GlobalStyles;
