import "./index.css";

import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import CustomThemeProvider from "./context/CustomThemeProvider";
import ModalProvider from "./context/ModalProvider";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomThemeProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
