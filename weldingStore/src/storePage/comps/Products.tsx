import products from "../../siteData/products.json"
import { ProductPreviewItem } from "./ProductPreviewItem"
import type { Product } from "../../types"
import "./Products.css"

interface ProductsProps {
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>
}

export function Products(props: ProductsProps) {
  return (
    <div className="productsContainer">
      <div className="productsPreviewContainer" >
        {products.map((product: Product) => (
          <ProductPreviewItem
            key={product.id}
            product={product}
            setSelectedProduct={props.setSelectedProduct}
          />
        ))}
      </div>
    </div>
  )
}
