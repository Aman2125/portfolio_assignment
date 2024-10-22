import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

// Set basename to match your GitHub repository name
const root = createRoot(document.getElementById("app"));
root.render(
  <Router basename="/My_Portfolio">
    <App />
  </Router>
);
