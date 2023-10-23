import "./StorePage.css";
import { Products } from "./comps/Products";
import { HeaderBar } from "../crossPageComps/HeaderBar";
import { SaleHero } from "./comps/SaleHero";
import { useState } from "react";
import { Product } from "../types";
import { ProductDetail } from "./comps/ProductDetail";

export function StorePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <HeaderBar />
      {selectedProduct === null ?
        <>
          <SaleHero />
          <Products setSelectedProduct={setSelectedProduct} />
        </>
        : <ProductDetail product={selectedProduct} />}
    </>
  )
}
