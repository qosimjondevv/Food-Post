import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./components/Contex/AppContex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>,
);
