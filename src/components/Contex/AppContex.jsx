import { createContext, useState } from "react";

export const AppContex = createContext();

export function AppProvider({ children }) {
  const [menuCategoriy, setmenuCategoriy] = useState("All");
  const [orders, setOrders] = useState([]);
  const [pament, setPament] = useState(false);
  const [activeCard, setActiveCard] = useState("credit");

  const total = orders.reduce((sum, or) => sum + or.qty * or.price, 0);

  return (
    <AppContex.Provider
      value={{
        menuCategoriy,
        setmenuCategoriy,
        orders,
        setOrders,
        pament,
        setPament,
        activeCard,
        setActiveCard,
        total,
      }}
    >
      {children}
    </AppContex.Provider>
  );
}
