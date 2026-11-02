import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./app/store.tsx";
import AppRoutes from "./app/routes/AppRoutes.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRoutes/>
  </Provider>,
);
