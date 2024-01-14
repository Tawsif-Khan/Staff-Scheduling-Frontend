import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
// core styles
import "./scss/volt.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <HomePage />
    </HashRouter>
    ,
  </React.StrictMode>
);
