import "./CartContent.css"
import { useContext } from "react"
import { CartContext } from "../App"
import { QuantitySelector } from "./QuantitySelector";
import { Product } from "../types";

export function CartContent() {
  const { cart } = useContext(CartContext);

  const getPriceSum = () => {
    let sum: number = 0;
    for (const item of cart) {
      sum += item.price;
    }
    return sum;
  }

  const getFilteredCart = () => {
    const filteredCart: Product[] = [];
    for (const item of cart) {
      if (!filteredCart.includes(item)) {
        filteredCart.push(item);
      }
    }
    return filteredCart;
  }

  return (
    <div className="cartContainer">
      <div className="cartContentContainer" >
        {getFilteredCart().map((item) => {
          return (
            <div className="cartContentItem">
              <img className="cartImage" src={item.imgSrc} />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <QuantitySelector product={item} />
            </div>
          )
        })}
      </div>
      <div className="checkoutInfoContainer">
        <p>Total: {getPriceSum()}</p>
      </div>
    </div>
  )
}
