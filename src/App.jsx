import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Start from "./start/BettyAssistant";
import AboutUs from "./about_us/About_us";
import Home from "./Home/RateDropSection";
import Calculator from "./calculator/MortgageCalculator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
  },
  {
    path: "/start",
    element: <Start />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/calculator",
    element: <Calculator />
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} /> 
  );
};

export default App;
