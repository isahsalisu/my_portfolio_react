

import React from "react";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
const root = createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
