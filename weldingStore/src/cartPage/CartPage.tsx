import { HeaderBar } from "../crossPageComps/HeaderBar";
import { CartContent } from "./CartContent";

export function CartPage() {
  return (
    <>
      <HeaderBar />
      <div style={{
        display: "flex",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <CartContent />
      </div>
    </>
  )
}
