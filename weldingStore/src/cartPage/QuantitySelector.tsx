import "./QuantitySelector.css";
import { useContext } from "react";
import { CartContext } from "../App";
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

  const handleQtyDown = (itemToRemove: Product) => {
    let removed: boolean = false;
    const newCart: Product[] = [];
    for (const product of cart) {
      if (!removed && product.id === itemToRemove.id) {
        removed = true;
        continue;
      }
      newCart.push(product);
    }
    setCart(newCart);
  }

  const handleQtyUp = (itemToAdd: Product) => {
    const newCart: Product[] = [...cart, itemToAdd];
    setCart(newCart);
  }

  return (
    <div className="qtySelectorContainer">
      <img
        className="qtySelectorIcons"
        src="./images/icons/up-arrow-svgrepo-com.svg"
        alt="quantity up arrow"
        onClick={() => handleQtyUp(props.product)}
      />
      <p>{getQty(props.product)}</p>
      <img
        className="qtySelectorIcons"
        src="./images/icons/down-arrow-svgrepo-com.svg"
        alt="quantity down arrow"
        onClick={() => handleQtyDown(props.product)}
      />
    </div>
  )
}
