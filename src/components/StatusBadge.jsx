import React from 'react';
import { css, styled } from 'styled-components';

const badgeColors = {
  active: '#D5F8EF',
  onleave: '#FDF3CE',
  laidoff: '#FFE5F4',
};

const Badge = styled.div`
  border-radius: 1rem;
  /* width: 100%; */
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  padding: 1.2rem 0;
  /* flex-grow: 1; */
  /* text-transform: capitalize; */

  ${(props) => {
    if (props.$bg === 'onleave' || props.$bg === 'pending') {
      return css`
        background-color: #fef9c3;
        color: #ca8a04;
      `;
    }

    if (props.$bg === 'laidoff') {
      return css`
        background-color: #dddddd;
      `;
    }

    if (props.$bg === 'resigned' || props.$bg === 'termination') {
      return css`
        background-color: #fee2e2;
        color: #991b1b;
      `;
    }

    if (props.$bg === 'resignation') {
      return css`
        background-color: #dbeafe;
        color: #1e40af;
      `;
    }

    // Reward/Recognition status colors

    if (props.$bg === 'approved') {
      return css`
        background-color: #dcfce7;

        color: #16a34a;
      `;
    }

    if (props.$bg === 'rejected') {
      return css`
        background-color: #fee2e2;

        color: #991b1b;
      `;
    }

    if (props.$bg === 'under_review') {
      return css`
        background-color: #dbeafe;

        color: #1e40af;
      `;
    }

    // Reward type colors

    if (props.$bg === 'monetary') {
      return css`
        background-color: #dcfce7;

        color: #16a34a;
      `;
    }

    if (props.$bg === 'recognition') {
      return css`
        background-color: #fef3c7;

        color: #d97706;
      `;
    }

    if (props.$bg === 'certificate') {
      return css`
        background-color: #e0e7ff;

        color: #4338ca;
      `;
    }

    return css`
      background-color: #dcfce7;
      color: #16a34a;
    `;

    // switch (props.$bg) {
    //   case "onleave":
    //     return css`
    //       background-color: #fdf3ce;
    //       color: #f4631e;
    //     `;
    //   case "laidoff":
    //     return css`
    //       background-color: #dddddd;
    //     `;

    //     case `${'resigned' || 'termination'}`:
    //     return css`
    //       background-color: #ffe5f4;
    //       color: #cb0404;
    //     `;

    //   default:
    //     return css`
    //       background-color: #d5f8ef;
    //       color: #16610e;
    //     `;
    // }
  }}
`;

function StatusBadge({ children, bg }) {
  return <Badge $bg={bg}>{children}</Badge>;
}

export default StatusBadge;
