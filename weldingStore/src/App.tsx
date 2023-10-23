import React, { createContext, useState } from "react";
import { LandingPage } from "./landingPage/LandingPage";
import { StorePage } from "./storePage/StorePage";
import { CartPage } from "./cartPage/CartPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Product } from "./types";

const initialCart: Product[] = [];
export const CartContext = createContext<{
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>
}>({
  cart: initialCart,
  setCart: () => { },
});

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
  const [cart, setCart] = useState<Product[]>(initialCart);

  return (
    <React.StrictMode>
      <CartContext.Provider value={{ cart, setCart }}>
        <RouterProvider router={router} />
      </CartContext.Provider>
    </React.StrictMode>
  )
}
