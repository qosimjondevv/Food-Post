import { useContext, useEffect } from "react";
import Header from "../Header/Header";
import MenuCard from "../Menu/MenuCard";
import { Orders } from "../Orders/Orders";
import "./Home.css";
import { AppContex } from "../Contex/AppContex";

function HomePage() {
  const { orders, setPament } = useContext(AppContex);

  useEffect(() => {
    return () => {
      setPament(false);
    };
  }, []);

  return (
    <div className="homeWrapper">
      <div className="menu">
        <Header />
        <div className="menuScroll">
          <MenuCard />
        </div>
      </div>

      <div className={`ordersWrapper ${orders.length > 0 ? "open" : ""}`}>
        {orders.length > 0 && <Orders />}
      </div>
    </div>
  );
}

export default HomePage;
