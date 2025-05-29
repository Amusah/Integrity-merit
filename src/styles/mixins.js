import { styled } from "styled-components";

 const fontRegular = `
  font-weight: 300;
  font-size: 4rem;
`

 const fontBold = `
  font-weight: 500;
  font-size: 4.8rem;
  color: green;
`;

 const fontSemiBold = `
  font-weight: 600;
  font-size: 4.8rem;
`;

const wrapper = `
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  z-index: 10;
`;




export { fontRegular, fontBold, fontSemiBold, wrapper };