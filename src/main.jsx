import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { Dashboard } from "./Dashboard";
// import { Login } from "./Login";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Login /> */}
    <Dashboard />
  </StrictMode>
);
