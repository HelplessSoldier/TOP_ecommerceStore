import React, { useState } from "react";
import { LandingPage } from "./landingPage/LandingPage";
import { StorePage } from "./storePage/StorePage";
import { CartPage } from "./cartPage/CartPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/store",
    element: <StorePage />
  },
  {
    path: "/cart",
    element: <CartPage />
  },
])

export const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}
