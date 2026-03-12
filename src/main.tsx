
// import React from "react";
import ReactDom from 'react-dom/client'
import {App} from "./App.tsx";
import { HashRouter} from "react-router-dom";
import "./index.css";

ReactDom.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);