import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Dashboard,
  Discount,
  HomePage,
  LogOut,
  Message,
  Notification,
  // Orders,
  Payment,
  Settings,
  Sidebar,
} from "./components";
import { useContext } from "react";
import { AppContex } from "./components/Contex/AppContex";

function App() {
  const { pament } = useContext(AppContex);
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/discount" element={<Discount />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/message" element={<Message />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<LogOut />} />
          </Routes>
        </div>

        {pament && <Payment />}
      </div>
    </BrowserRouter>
  );
}

export default App;
