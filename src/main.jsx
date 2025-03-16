import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FilterProvider } from "./Context/FilterContext";
import ErrorBoundary from "./utils/ErrorBoundary";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ErrorBoundary>
  </StrictMode>
);
