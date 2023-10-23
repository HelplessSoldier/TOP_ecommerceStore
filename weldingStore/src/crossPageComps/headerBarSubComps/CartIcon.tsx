import "./CartIcon.css"
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../App";

export function CartIcon() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate("/cart")
  }

  return (
    <div className="cartIconContainer">
      <img
        className="cartIcon"
        src="./images/icons/cart-shopping-svgrepo-com.svg"
        onClick={handleCartClick}
      />
      <p className="cartCounter">{cart.length}</p>
    </div>

  )
}
