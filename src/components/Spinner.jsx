import { styled } from "styled-components";

 const Spinner = styled.div`
   width: ${(props) => props.$size || "5rem"};
   padding: 0.4rem;
   aspect-ratio: 1;
   border-radius: 50%;
   margin: 5% auto;
   background: ${(props) => props.$color || "var(--light-primary)"};
   --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
   -webkit-mask: var(--_m);
   mask: var(--_m);
   -webkit-mask-composite: source-out;
   mask-composite: subtract;
   animation: rotate 0.8s infinite linear;

   @keyframes rotate {
     to {
       transform: rotate(1turn);
     }
   }
 `;

// function Spinner() {
//   return <LoadingSpinner />;
// }

export default Spinner;
