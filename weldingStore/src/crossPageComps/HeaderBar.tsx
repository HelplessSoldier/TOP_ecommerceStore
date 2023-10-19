import { useNavigate } from "react-router-dom"
import "./HeaderBar.css"

export function HeaderBar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  }

  const handleCartClick = () => {
    navigate("/cart")
  }

  return (
    <div className="headerBarContainer">
      <img
        className="userIcon"
        src="./images/icons/user-svgrepo-com.svg" />
      <h1
        className="headerLogo"
        onClick={handleLogoClick}>SPRK</h1>
      <img
        className="cartIcon"
        src="./images/icons/cart-shopping-svgrepo-com.svg"
        onClick={handleCartClick}
      />
    </div>
  )
}
