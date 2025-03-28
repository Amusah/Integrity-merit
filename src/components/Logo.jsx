import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { breakPoints } from "../styles/breakpoints";

const Img = styled.img`
/* margin: 0 auto; */
  margin-bottom: 3rem;
  /* margin: 0 auto 3rem; */
  /* width: 100%; */

  ${breakPoints.laptopScreen}{
    width: 10rem;
  }
`;

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const Logo = ({ src }) => {
  return (
    <Link style={styles} to='/'>
      <Img src={src} alt="Brand Logo" />
    </Link>
  );
};

export default Logo;
