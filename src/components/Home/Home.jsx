import { useEffect } from "react";
import Header from "../Header/Header";
import MenuCard from "../Menu/MenuCard";
import Orders from "../Orders/Orders";
import "./Home.css";

function HomePage({
  menuCategoriy,
  setmenuCategoriy,
  orders,
  setOrders,
  setPament,
}) {
  useEffect(() => {
    return () => {
      setPament(false);
    };
  }, []);

  return (
    <div className="homeWrapper">
      <div className="menu">
        <Header
          menuCategoriy={menuCategoriy}
          setmenuCategoriy={setmenuCategoriy}
        />
        <div className="menuScroll">
          <MenuCard
            menuCategoriy={menuCategoriy}
            orders={orders}
            setOrders={setOrders}
          />
        </div>
      </div>

      <div className={`ordersWrapper ${orders.length > 0 ? "open" : ""}`}>
        {orders.length > 0 && (
          <Orders orders={orders} setOrders={setOrders} setPament={setPament} />
        )}
      </div>
    </div>
  );
}

export default HomePage;
