// ICONS //
import { CiHome } from "react-icons/ci";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { GrGroup } from "react-icons/gr";
import { LuUserX } from "react-icons/lu";
import { FiAward } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { LuMessageSquare } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const navItems = [
  { route: "/", icon: <CiHome size={25} />, label: "Home" },
  {
    route: "/departments",
    icon: <HiOutlineBuildingOffice size={25} />,
    label: "Departments",
  },
  {
    route: "/employees",
    icon: <GrGroup size={25} />,
    label: "Employees",
  },
  {
    route: "/resignations",
    icon: <LuUserX size={25} />,
    label: "Resignations / Terminations",
  },
  {
    route: "/rewards",
    icon: <FiAward size={25} />,
    label: "Rewards / Punishment",
  },
  {
    route: "/feedbacks",
    icon: <LuMessageSquare size={25} />,
    label: "Feedbacks",
  },
  { route: "/kpi", icon: <GoGraph size={25} />, label: "KPI" },
  { route: "/settings", icon: <FiSettings size={25} />, label: "Settings" },
];

console.log(NavLink);

const MainNav = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-10">
        {navItems.map(({ route, icon, label }) => (
          <li className="hover:bg-white/20 p-2 rounded-[0.7rem]" key={label}>
            <NavLink
              to={route}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "p-2 rounded-[0.7rem] bg-white/20 hover:bg-transparent"
                    : ""
                } flex flex-col md:flex-row md:justify-start justify-center items-center gap-2 text-white text-[1.8rem] transition ease-out duration-500`
              }
            >
              <span className="block lg:hidden">{icon}</span>
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
