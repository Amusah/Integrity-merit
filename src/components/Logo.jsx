import { styled } from "styled-components"

const Img = styled.img`
  margin-bottom: 3rem;
`

const Logo = ({src}) => {
  return (
    <Img src={src} alt="Brand Logo" />
  )
}

export default Logo