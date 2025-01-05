
import { desktop } from "../assets";


const style = {
  marginTop: '4rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  color: '#fff'
}

function Profile() {
  return (
    <div style={style}>
      <img src={desktop.profile} alt="Profile picture" />
      <h2>Paul Shark</h2>
    </div>
  );
}

export default Profile
