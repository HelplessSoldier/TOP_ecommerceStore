import "./StorePage.css";
import { Products } from "./comps/Products";
import { HeaderBar } from "../crossPageComps/HeaderBar";

export function StorePage() {
  return (
    <>
      <HeaderBar />
      <div className="productsContainer">
        <Products />
      </div>
    </>
  )
}
