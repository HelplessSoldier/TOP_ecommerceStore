import { useContext } from "react"
import { CartContext } from "../App"
import { Product } from "../types";

interface QuantitySelectorProps {
  product: Product;
}

export function QuantitySelector(props: QuantitySelectorProps) {
  const { cart, setCart } = useContext(CartContext);

  const getQty = (item: Product) => {
    let sum: number = 0;
    for (const product of cart) {
      if (item.id === product.id) {
        sum++;
      }
    }
    return sum;
  }

  const handleQtyDown = (item: Product) => {
    return;
  }

  const handleQtyUp = (item: Product) => {
    return;
  }

  return (
    <div className="qtySelectorContainer">
      <button className="qtySelectorButtons">
      </button>
      <p>{getQty(props.product)}</p>
      <button className="qtySelectorButtons" />
    </div>
  )
}
