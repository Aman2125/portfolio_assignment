/**
 * Entry point of application, where App is rendered within the div with the id of "app"
 */

import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot instead of render
import App from "./App";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
