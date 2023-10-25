import "./Hero.css";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="heroContainer">
      <h1 className="heroHeader">
        Clean drip for a dirty job.
      </h1>
      <button
        className="shopNowButton"
        onClick={() => navigate("/store")}
      >
        Shop
      </button>
    </div>
  )
}
