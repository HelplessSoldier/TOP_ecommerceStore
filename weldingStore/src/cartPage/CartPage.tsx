import "./CartPage.css";
import { useContext } from "react";
import { HeaderBar } from "../crossPageComps/HeaderBar";
import { CartContent } from "./CartContent";
import { CartContext } from "../App";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function CartPage() {
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = () => {
      navigate('/store')
    }
    window.addEventListener('popstate', handleBackButton);
  }, [navigate])


  return (
    <>
      <HeaderBar />
      {cart.length > 0 ?
        <div style={{
          display: "flex",
          width: "100vw",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <CartContent />
        </div>
        :
        <h1 className="emptyCartText">
          Cart is Empty
        </h1>
      }
    </>
  )
}
