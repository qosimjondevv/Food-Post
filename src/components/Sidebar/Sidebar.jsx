import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import sideLogo from "../../assets/icons/sitiLogo.svg";
import iconHome from "../../assets/icons/Home.svg";
import iconDicount from "../../assets/icons/Discount.svg";
import iconDashboard from "../../assets/icons/Dashboard.svg";
import iconMessage from "../../assets/icons/Message.svg";
import iconNotificator from "../../assets/icons/Notification.svg";
import iconSetting from "../../assets/icons/Setting.svg";
import iconLogOut from "../../assets/icons/LogOut.svg";

const menu_links = [
  {
    id: 1,
    title: "Home",
    icon: iconHome,
    path: "/",
  },
  {
    id: 2,
    title: "Discount",
    icon: iconDicount,
    path: "/discount",
  },
  {
    id: 3,
    title: "Dashboard",
    icon: iconDashboard,
    path: "/dashboard",
  },
  {
    id: 4,
    title: "Message",
    icon: iconMessage,
    path: "/message",
  },
  {
    id: 5,
    title: "Notification",
    icon: iconNotificator,
    path: "/notification",
  },
  {
    id: 6,
    title: "Setting",
    icon: iconSetting,
    path: "/setting",
  },
];

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="siteLogo">
        <NavLink to="/">
          <img src={sideLogo} className="sideicon" />
        </NavLink>
      </div>

      <div className="sidebarMiddle">
        {menu_links.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "iconSidebar active" : "iconSidebar"
            }
          >
            <img src={item.icon} />
          </NavLink>
        ))}
      </div>

      <div className="sidebarBottom">
        <NavLink
          to="/logout"
          className={({ isActive }) =>
            isActive ? "iconSidebar active" : "iconSidebar"
          }
        >
          <img src={iconLogOut} />
        </NavLink>
      </div>
    </div>
  );
};
