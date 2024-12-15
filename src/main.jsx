import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./styles/index.css";
import router from "./utils/router.jsx";
import theme from "./styles/Theme.js";
import { ThemeProvider } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </ThemeProvider>
  </StrictMode>
);
