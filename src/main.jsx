import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Conversor } from "./components/Conversor.jsx";
import { Footer } from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Conversor></Conversor>
    <Footer></Footer>
  </StrictMode>
);
