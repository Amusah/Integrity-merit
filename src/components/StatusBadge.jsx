import React from "react";
import { css, styled } from "styled-components";

const badgeColors = {
  active: "#D5F8EF",
  onleave: "#FDF3CE",
  laidoff: "#FFE5F4",
};

const Badge = styled.div`
  border-radius: 1rem;
  /* width: 100%; */
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  /* flex-grow: 1; */
  text-transform: capitalize;

  ${(props) => {
    switch (props.$bg) {
      case "onleave":
        return css`
          background-color: #fdf3ce;
          color: #f4631e;
        `;
      case "laidoff":
        return css`
          background-color: #dddddd;
        `;

        case "resigned": 
        return css`
          background-color: #ffe5f4;
          color: #cb0404;
        `;

      default:
        return css`
          background-color: #d5f8ef;
          color: #16610e;
        `;
    }
  }}
`;

function StatusBadge({ children, bg }) {
  return <Badge $bg={bg}>{children}</Badge>;
}

export default StatusBadge;


