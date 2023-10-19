import products from "../siteData/products.json"
import { ProductPreviewItem } from "./comps/ProductPreviewItem"
import { Product } from "../types"

export function StorePage() {
  return (
    <>
      {products.map((product: Product) => (
        <ProductPreviewItem key={product.id} product={product} />
      ))}
    </>
  )
}
