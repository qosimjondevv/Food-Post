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

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="siteLogo">
        <NavLink to="/">
          <img src={sideLogo} className="sideicon" />
        </NavLink>
      </div>

      <div className="sidebarMiddle">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "iconSidebar active" : "iconSidebar"
          }
        >
          <img src={iconHome} />
        </NavLink>

        <NavLink
          to="/discount"
          className={({ isActive }) =>
            isActive ? "iconSidebar active" : "iconSidebar"
          }
        >
          <img src={iconDicount} />
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "iconSidebar active" : "iconSidebar"
          }
        >
          <img src={iconDashboard} />
        </NavLink>

        <NavLink
          to="/message"
          className={({ isActive }) =>
            isActive ? "iconSidebar active" : "iconSidebar"
          }
        >
          <img src={iconMessage} />
        </NavLink>

        <NavLink
          to="/notification"
          className={({ isActive }) =>
            isActive ? "iconSidebar active" : "iconSidebar"
          }
        >
          <img src={iconNotificator} />
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "iconSidebar active" : "iconSidebar"
          }
        >
          <img src={iconSetting} />
        </NavLink>
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
}

export default Sidebar;
