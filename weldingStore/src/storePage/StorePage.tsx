import products from "../siteData/products.json"
import { Product, ProductPreviewItem } from "./comps/ProductPreviewItem"

export function StorePage() {
  return (
    <>
      {products.map((product: Product) => (
        <ProductPreviewItem key={product.id} product={product} />
      ))}
      <p>hello from the store page!</p>
    </>
  )
}
