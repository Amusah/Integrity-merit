
import MainNav from "./MainNav"
import Profile from "./Profile";
import Logo from './Logo';
import { desktop } from "../assets"



const Sidebar = () => {
  return (
    <aside className="bg-light-primary flex flex-col gap-8 p-[3rem]">
      <Logo src={desktop.logo} />
      <MainNav />
      <Profile />
    </aside>
  );
}

export default Sidebar