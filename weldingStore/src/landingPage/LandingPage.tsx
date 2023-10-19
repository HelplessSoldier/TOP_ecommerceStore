import { useContext } from "react"
import { CartContext } from "../App"
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleStoreLinkClick = () => {
    navigate("/store")
  }

  return (
    <>
      <p>hello from the landing page!</p>
      <p onClick={handleStoreLinkClick}>temp store link here</p>
    </>
  )
}
