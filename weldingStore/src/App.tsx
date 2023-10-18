import React, { createContext, useState } from "react";
import { LandingPage } from "./landingPage/LandingPage";
import { StorePage } from "./storePage/StorePage";
import { CartPage } from "./cartPage/CartPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartItem } from "./types";

const initialCart: CartItem[] = [];
const CartContext = createContext<{
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
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
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  return (
    <React.StrictMode>
      <CartContext.Provider value={{ cart, setCart }}>
        <RouterProvider router={router} />
      </CartContext.Provider>
    </React.StrictMode>
  )
}
