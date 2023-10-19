import products from "../../siteData/products.json"
import { ProductPreviewItem } from "./ProductPreviewItem"
import type { Product } from "../../types"
import "./Products.css"

export function Products() {
  return (
    <div className="productsPreviewContainer" >
      {products.map((product: Product) => (
        <ProductPreviewItem key={product.id} product={product} />
      ))}
    </div>
  )
}
