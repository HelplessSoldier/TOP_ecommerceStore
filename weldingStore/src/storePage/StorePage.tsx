import "./StorePage.css";
import { Products } from "./comps/Products";
import { HeaderBar } from "../crossPageComps/HeaderBar";
import { SaleHero } from "./comps/SaleHero";
import { useEffect, useState } from "react";
import { Product } from "../types";
import { ProductDetail } from "./comps/ProductDetail";
import { useNavigate } from "react-router-dom";

export function StorePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = () => {
      if (selectedProduct !== null) {
        setSelectedProduct(null);
        navigate('/store')
      } else {
        navigate("/");
      }
    }
    window.addEventListener('popstate', handleBackButton);
  }, [selectedProduct, navigate])

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
