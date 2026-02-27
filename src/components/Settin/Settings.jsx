import "./Settings.css";
import { useState } from "react";

import iconAppereance from "../../assets/icons/Appereance.svg";
import iconRestururant from "../../assets/icons/Restaurant.svg";
import iconDiscount from "../../assets/icons/DiscountQora.svg";
import iconNotification from "../../assets/icons/NotificationQora.svg";
import iconSecurity from "../../assets/icons/SecurityQora.svg";
import iconAboutAs from "../../assets/icons/AboutUs.svg";
import iconEdit from "../../assets/icons/Edit.svg";
import suyuLagman from "../../assets/img/suyuLagmon.svg";
import poNiovqati from "../../assets/img/poNiovqati.svg";

function Settings() {
  const [active, setActive] = useState("products");
  const [activeTab, setActiveTab] = useState("Hot Dishes");

  const tabs = [
    "Hot Dishes",
    "Cold Dishes",
    "Soup",
    "Grill",
    "Appetizer",
    "Dessert",
  ];

  const menuItems = [
    {
      id: "appearance",
      icon: iconAppereance,
      title: "Appearance",
      desc: "Dark and Light mode, Font size",
    },
    {
      id: "restaurant",
      icon: iconRestururant,
      title: "Your Restaurant",
      desc: "Dark and Light mode, Font size",
    },
    {
      id: "products",
      icon: iconDiscount,
      title: "Products Management",
      desc: "Manage your product, pricing, etc",
    },
    {
      id: "notification",
      icon: iconNotification,
      title: "Notifications",
      desc: "Customize your notifications",
    },
    {
      id: "security",
      icon: iconSecurity,
      title: "Security",
      desc: "Configure Password, PIN, etc",
    },
    {
      id: "about",
      icon: iconAboutAs,
      title: "About Us",
      desc: "Find out more about Posly",
    },
  ];

  return (
    <div className="setting">
      <h1>Settings</h1>

      <div className="setCards">
        <div className="setLeft">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`contendCard ${active === item.id ? "active" : ""}`}
              onClick={() => setActive(item.id)}
            >
              <div className="contImg">
                <img src={item.icon} alt="" />
              </div>
              <div className="contentText">
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* //////////////////////////////////////////////////////////////////////// */}
        <div className="setRight">
          {active === "products" && (
            <div className="productManagement">
              <div className="pmHeader">
                <h2>Products Management</h2>
                <button className="manageBtn">Manage Categories</button>
              </div>

              <div className="pmTabs">
                {tabs.map((tab) => (
                  <span
                    key={tab}
                    className={activeTab === tab ? "activeTab" : ""}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </span>
                ))}
              </div>

              <div className="pmGrid">
                <div className="addCard">
                  <div className="plus">+</div>
                  <p>Add new dish</p>
                </div>

                <div className="productCard">
                  <div className="productCard-content">
                    <img src={suyuLagman} className="productCardImg" alt="" />
                    <h4>
                      Spicy seasoned <br /> seafood noodles
                    </h4>
                    <p>$2.29 • 20 Bowls</p>
                  </div>
                  <button>
                    <img src={iconEdit} className="editIcon" alt="" />
                    Edit dish
                  </button>
                </div>

                <div className="productCard">
                  <div className="productCard-content">
                    <img src={poNiovqati} className="productCardImg" alt="" />
                    <h4>
                      Salted Pasta with <br /> mushroom sauce
                    </h4>
                    <p>$2.69 • 30 Bowls</p>
                  </div>
                  <button>
                    <img src={iconEdit} className="editIcon" alt="" />
                    Edit dish
                  </button>
                </div>

                <div className="productCard">
                  <div className="productCard-content">
                    <img src={poNiovqati} className="productCardImg" alt="" />
                    <h4>
                      Salted Pasta with <br /> mushroom sauce
                    </h4>
                    <p>$2.69 • 30 Bowls</p>
                  </div>
                  <button>
                    <img src={iconEdit} className="editIcon" alt="" />
                    Edit dish
                  </button>
                </div>

                <div className="productCard">
                  <div className="productCard-content">
                    <img src={poNiovqati} className="productCardImg" alt="" />
                    <h4>
                      Salted Pasta with <br /> mushroom sauce
                    </h4>
                    <p>$2.69 • 30 Bowls</p>
                  </div>
                  <button>
                    <img src={iconEdit} className="editIcon" alt="" />
                    Edit dish
                  </button>
                </div>

                <div className="productCard">
                  <div className="productCard-content">
                    <img src={poNiovqati} className="productCardImg" alt="" />
                    <h4>
                      Salted Pasta with <br /> mushroom sauce
                    </h4>
                    <p>$2.69 • 30 Bowls</p>
                  </div>
                  <button>
                    <img src={iconEdit} className="editIcon" alt="" />
                    Edit dish
                  </button>
                </div>
              </div>

              <div className="pmFooter">
                <button className="discardBtn">Discard Changes</button>
                <button className="saveBtn">Save Changes</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;
