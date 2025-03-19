import React from "react";
import { styled } from "styled-components";

const LoadingSpinner = styled.div`
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  margin: 5% auto;
  background: var(--light-primary);
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

function Spinner() {
  return <LoadingSpinner />;
}

export default Spinner;
