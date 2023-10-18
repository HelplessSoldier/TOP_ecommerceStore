import { useContext } from "react"
import { CartContext } from "../App"

export function LandingPage() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <>
      <p>hello from the landing page!</p>
    </>
  )
}
