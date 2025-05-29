import React from 'react'
import {styled} from 'styled-components';


// const StatusBadge = styled.span`
//   background-color: ${props => props.$bg === 'active' ? var(--active) : props.$bg === '' ? :}
// `


function StatusBadge() {
  return (
    <StatusBadge className="isactive">StatusBadge</StatusBadge>
  )
}

export default StatusBadge