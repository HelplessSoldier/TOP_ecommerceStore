import { useNavigate } from "react-router-dom"
import "./HeaderBar.css"
import { CartIcon } from "./headerBarSubComps/CartIcon";

export function HeaderBar() {
  const navigate = useNavigate();

  return (
    <div className="headerBarContainer">
      <img
        className="userIcon"
        src="./images/icons/user-svgrepo-com.svg" />
      <h1
        className="headerLogo"
        onClick={() => navigate("/")}>SPRK</h1>
      <CartIcon />
    </div>
  )
}
