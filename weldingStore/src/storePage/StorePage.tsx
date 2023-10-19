import "./StorePage.css";
import { Products } from "./comps/Products";
import { HeaderBar } from "../crossPageComps/HeaderBar";
import { SaleHero } from "./comps/SaleHero";

export function StorePage() {
  return (
    <>
      <HeaderBar />
      <SaleHero />
      <div className="productsContainer">
        <Products />
      </div>
    </>
  )
}
