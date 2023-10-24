import "./CartPage.css";
import { useContext } from "react";
import { HeaderBar } from "../crossPageComps/HeaderBar";
import { CartContent } from "./CartContent";
import { CartContext } from "../App";

export function CartPage() {
  const { cart } = useContext(CartContext);
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
