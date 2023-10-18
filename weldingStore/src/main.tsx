import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LandingPage } from './landingPage/LandingPage.tsx'
import { StorePage } from './storePage/StorePage.tsx'
import { CartPage } from './cartPage/CartPage.tsx'

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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
