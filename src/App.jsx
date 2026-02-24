import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Dashboard,
  Discount,
  HomePage,
  LogOut,
  Message,
  Notification,
  Orders,
  Payment,
  Settings,
  Sidebar,
} from "./components";
import { useState } from "react";

function App() {
  const [menuCategoriy, setmenuCategoriy] = useState("All");
  const [orders, setOrders] = useState([]);
  const [payment, setPament] = useState(false);

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  menuCategoriy={menuCategoriy}
                  setmenuCategoriy={setmenuCategoriy}
                  orders={orders}
                  setOrders={setOrders}
                  setPament={setPament}
                />
              }
            />
            <Route path="/discount" element={<Discount />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/message" element={<Message />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<LogOut />} />
          </Routes>
        </div>

        {payment && (
          <Payment
            orders={orders}
            setOrders={setOrders}
            setPament={setPament}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
